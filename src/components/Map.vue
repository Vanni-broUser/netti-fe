<template>
  <v-container>
    <div ref="mapContainer" style="width: 100%; height: 600px;" />
  </v-container>
</template>

<script setup>
  import 'ol/ol.css';
  import Map from 'ol/Map';
  import View from 'ol/View';
  import XYZ from 'ol/source/XYZ';
  import Feature from 'ol/Feature';
  import Point from 'ol/geom/Point';
  import { fromLonLat } from 'ol/proj';
  import TileLayer from 'ol/layer/Tile';
  import { Icon, Style } from 'ol/style';
  import VectorLayer from 'ol/layer/Vector';
  import VectorSource from 'ol/source/Vector';

  import { useTheme } from 'vuetify';
  import { ref, onMounted } from 'vue';
  import marker from '@/assets/marker.png';

  const theme = useTheme();
  const mapContainer = ref(null);
  let map;

  const settings = {
    primaryColor: theme.current.value.primary,
    coordinates: [16.865323, 41.127601],
    zoom: 15
  };

  onMounted(() => {
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat(settings.coordinates))
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: marker
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
            url: 'https://{1-4}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
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