<template>
  <v-container>
    <div ref="mapContainer" style="width: 100%; height: 400px;" />
    <v-select
      v-model="selectedStyle"
      :items="availableStyles"
      label="Seleziona stile mappa"
      @update:modelValue="updateMapStyle"
    ></v-select>
  </v-container>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import 'ol/ol.css';
  import Map from 'ol/Map';
  import View from 'ol/View';
  import TileLayer from 'ol/layer/Tile';
  import XYZ from 'ol/source/XYZ';
  import Feature from 'ol/Feature';
  import Point from 'ol/geom/Point';
  import { fromLonLat } from 'ol/proj';
  import { Icon, Style } from 'ol/style';
  import VectorLayer from 'ol/layer/Vector';
  import VectorSource from 'ol/source/Vector';

  const mapContainer = ref(null);
  const selectedStyle = ref('osm-standard');
  let map;

  const availableStyles = [
    { title: 'OSM Standard', value: 'osm-standard' },
    { title: 'OSM Humanitarian', value: 'osm-humanitarian' },
    { title: 'Stamen Toner', value: 'stamen-toner' },
    { title: 'Carto Voyager', value: 'carto-voyager' },
    { title: 'Carto Positron', value: 'carto-positron' },
    { title: 'Carto Dark Matter', value: 'carto-dark-matter' },
    { title: 'OpenTopoMap', value: 'opentopomap' },
  ];

  const mapStyles = {
    'osm-standard': 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    'osm-humanitarian': 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    'stamen-toner': 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
    'carto-voyager': 'https://{1-4}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
    'carto-positron': 'https://{1-4}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    'carto-dark-matter': 'https://{1-4}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
    'opentopomap': 'https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png'
  };

  const settings = {
    primaryColor: '#ff0000',
    coordinates: [16.865323, 41.127601],
    zoom: 15
  };

  function updateMapStyle() {
    const layers = map.getLayers();
    layers.removeAt(0);
    layers.insertAt(0, new TileLayer({
      source: new XYZ({
        url: mapStyles[selectedStyle.value],
        attributions: getAttributions(selectedStyle.value)
      })
    }));
  }

  function getAttributions(style) {
    const baseAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const attributions = {
      'osm-standard': baseAttribution,
      'osm-humanitarian': baseAttribution + ' | Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
      'stamen-toner': 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      'carto-voyager': '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      'carto-positron': '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      'carto-dark-matter': '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      'opentopomap': 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    };
    return attributions[style];
  }

  onMounted(() => {
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat(settings.coordinates))
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: `${import.meta.env.VITE_HOSTNAME}colorize-image?color=%23${settings.primaryColor.substring(1)}`
      })
    });

    iconFeature.setStyle(iconStyle);

    const vectorSource = new VectorSource({
      features: [iconFeature]
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource
    });

    map = new Map({
      target: mapContainer.value,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: mapStyles[selectedStyle.value],
            attributions: getAttributions(selectedStyle.value)
          })
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat(settings.coordinates),
        zoom: settings.zoom
      })
    });
  });
</script>