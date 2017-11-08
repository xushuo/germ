/*$('#fullpageContent').fullpage({
 controlArrows:false,
 sectionSelector:'.sectionF',
 slideSelector:'.slideF',
 afterRender:function(){
 console.log('init');
 },
 afterSlideLoad: function(anchorLink,index,slideAnchor,slideIndex){
 }
 });*/

var myChart = echarts.init(document.getElementById('chart'));
var option = {
    title: {
        text: '细菌分裂',
        textStyle:{
            fontSize: 40
        }
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: {
        type: 'graph',
        layout: 'force',
        symbol: 'image://img/germ.png',
        symbolSize: 80,
        roam: true,
        draggable: true,
        label: {
            normal: {
                show: true
            }
        },
        force: {
            repulsion: 200
        },
        data: [{
            id: 0
        }],
        links: []
    }
};
var num = 2;
myChart.on('dblclick', function (params) {
    console.log(option);
    var strs = [];
    for(var i=0; i<num; i++){
        strs.push({
            id: i
        });
    }
    option.series.data = strs;
    num = num*2;
    myChart.setOption(option);
});
myChart.hideLoading();
myChart.setOption(option);
window.onresize = function () {
    myChart.resize();
}
