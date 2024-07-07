<template>
  <v-container>
    <div ref="mapContainer" style="width: 100%; height: 400px;" />
  </v-container>
</template>

<script setup>
  import 'ol/ol.css';
  import Map from 'ol/Map';
  import View from 'ol/View';
  import OSM from 'ol/source/OSM';
  import Feature from 'ol/Feature';
  import Point from 'ol/geom/Point';
  import { fromLonLat } from 'ol/proj';
  import { onMounted, ref } from 'vue';
  import TileLayer from 'ol/layer/Tile';
  import { Icon, Style } from 'ol/style';
  import VectorLayer from 'ol/layer/Vector';
  import VectorSource from 'ol/source/Vector';

  const settings = {
    primaryColor: '#ff0000',
    coordinates: [
      16.865323,
      41.127601
    ],
    zoom: 15
  };

  let mapContainer = ref(null);
  let map;

  onMounted(() => {
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat(settings.coordinates))
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: `${import.meta.env.VITE_HOSTNAME}/colorize-image?color=%23${settings.primaryColor.substring(1)}`
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
          source: new OSM()
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
