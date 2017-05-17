const d3Selection = require('d3-selection');
const {
  line
} = require('britecharts');
const data = require('./data.json');

function createLineChart(optionalColorSchema, optionalData) {
  var lineChart1 = line(),
    container = d3Selection.select('.js-line-chart-container'),
    containerWidth = container.node() ? container.node().getBoundingClientRect().width : false,
    tooltipContainer,
    dataset = data;

  if (containerWidth) {

    // LineChart Setup and start
    lineChart1
      .aspectRatio(0.5)
      .grid('horizontal')
      .width(containerWidth)
      .dateLabel('fullDate');

    if (optionalColorSchema) {
      lineChart1.colorSchema(optionalColorSchema);
    }

    container.datum(dataset).call(lineChart1);


  }
}

createLineChart();
