<!DOCTYPE html>
<style>
    .axis path,
    .axis line {
        fill: none;
        stroke: #23A5F7;
        shape-rendering: crispEdges;
    }
    .axis text {
        font-family: sans-serif;
        font-size: 11px;
        stroke: rgb(174, 85, 72);
    }
    .g-rect-path {
        fill: none;
        stroke-width: 2;
        stroke: #d3dce6;
        stroke-linejoin: round;
        stroke-linecap: round;
    }
    .g-rect-fill {
        fill: none;
        stroke-width: 2;
        /*#ff7700*/
        stroke-linejoin: round;
        stroke-linecap: round;
        stroke-dasharray: 0, 1370;
        stroke-dashoffset: 0;
        animation: lineMove 2s ease-out infinite;
    }
    @keyframes lineMove {
        0% {
            stroke-dasharray: 0, 1350;
        }
        100% {
            stroke-dasharray: 1350, 1350;
        }
    }
</style>
<!--
熟知背景：
    1、技术人员也在产品/项目开发中，通过各种图表引擎（框架）来实现图表的制作和渲染。目前常见的框架有：echarts、Hicharts、Charts.js以及图表引擎的”开山鼻祖“——D3.js；
    2、Data-Driven Documents，数据驱动的文档；
市场运用：
    表现“起点→终点”在可视化领域的需求很大。通过扩展此图，可应用于交通运输、物流、进出口贸易、大数据分析等行业。
-->
<svg width="100" height="100"></svg>
<script src="d3.v4.min.js"></script>
<script>
    /*  d3.v3.min.js 升级 d3.v4.min.js  ==>>改动如下
 拖拽行为d3.behavior.drag被重命名为d3.drag。drag.origin由
 drag.subject替代用以定义拖拽的起始参考点。这在使用Canvas画布时非常有用，
 因为拖拽对象共享一个Canvas元素(在SVG中拖拽的元素都是独立的DOM元素)，比如拖拽圆的例子
 */
    /*
 在3.x中使用字符串来定义过渡类型，然后将这些字符串传入d3.ease或transition.ease。
 在4.0中通过定义符号来设置过渡类型。比如d3.easeCubicInOut.。
 */
    /*
 d3.layout.force被重命名为d3.forceSimulation。
 新的力导向仿真使用速度Verlet算法而不是位置Verlet算法，即追踪节点的位置(node.x，node.y)
 和速度(node.vx,node.vy)而不是之前的位置(node.px，node.py)。
 */
    /*
 d3.scale.linear -> d3.scaleLinear

 d3.scale.sqrt -> d3.scaleSqrt

 d3.scale.pow -> d3.scalePow

 d3.scale.log -> d3.scaleLog

 d3.scale.quantize -> d3.scaleQuantize

 d3.scale.threshold -> d3.scaleThreshold

 d3.scale.quantile -> d3.scaleQuantile

 d3.scale.identity -> d3.scaleIdentity

 d3.scale.ordinal -> d3.scaleOrdinal

 d3.time.scale -> d3.scaleTime

 d3.time.scale.utc -> d3.scaleUtc

 比例尺的刻度与输入范围的顺序一致。比如有一个输入范围降序的比例尺，
 生成的刻度也是降序的。这个改变影响了由axes生成的刻度顺序，比如：
 d3.scaleLinear().domain([10, 0]).ticks(5); // [10, 8, 6, 4, 2, 0]
 */



    //后端数据处理
    //路线way查找处理：
    var way = {
        "Way": [{
                "way_id": "1",
                "Way": "8,1,3,4,5,12"
 },
            {
                "way_id": "2",
                "Way": "8,2,6,12,18,3,7,8"
 },
            {
                "way_id": "3",
                "Way": "8,31,23,28,22,8"
 },
            {
                "way_id": "4",
                "Way": "8,1,3,5,8"
 },
            {
                "way_id": "5",
                "Way": "8,2,6,7,8"
 }]
    };

    var position = {
        "Position": [{
                "id": 1,
                "x": 181,
                "y": 322,
                "dist": 369
 },
            {
                "id": 2,
                "x": 347,
                "y": 321,
                "dist": 473
 },
            {
                "id": 3,
                "x": 244,
                "y": 491,
                "dist": 548
 },
            {
                "id": 4,
                "x": 163,
                "y": 534,
                "dist": 558
 },
            {
                "id": 5,
                "x": 608,
                "y": 256,
                "dist": 660
 },
            {
                "id": 6,
                "x": 652,
                "y": 219,
                "dist": 688
 },
            {
                "id": 7,
                "x": 362,
                "y": 638,
                "dist": 734
 },
            {
                "id": 8,
                "x": 722,
                "y": 267,
                "dist": 770
 },
            {
                "id": 9,
                "x": 294,
                "y": 728,
                "dist": 785
 },
            {
                "id": 10,
                "x": 646,
                "y": 491,
                "dist": 811
 },
            {
                "id": 11,
                "x": 315,
                "y": 788,
                "dist": 849
 },
            {
                "id": 12,
                "x": 810,
                "y": 580,
                "dist": 996
 },
            {
                "id": 13,
                "x": 723,
                "y": 697,
                "dist": 1004
 },
            {
                "id": 14,
                "x": 720,
                "y": 813,
                "dist": 1086
 },
            {
                "id": 15,
                "x": 1060,
                "y": 312,
                "dist": 1105
 },
            {
                "id": 16,
                "x": 949,
                "y": 625,
                "dist": 1136
 },
            {
                "id": 17,
                "x": 851,
                "y": 760,
                "dist": 1141
 },
            {
                "id": 18,
                "x": 1146,
                "y": 160,
                "dist": 1157
 },
            {
                "id": 19,
                "x": 1091,
                "y": 403,
                "dist": 1163
 },
            {
                "id": 20,
                "x": 1181,
                "y": 127,
                "dist": 1188
 },
            {
                "id": 21,
                "x": 1154,
                "y": 561,
                "dist": 1283
 },
            {
                "id": 22,
                "x": 1276,
                "y": 331,
                "dist": 1318
 },
            {
                "id": 23,
                "x": 1183,
                "y": 646,
                "dist": 1348
 },
            {
                "id": 24,
                "x": 1302,
                "y": 378,
                "dist": 1356
 },
            {
                "id": 25,
                "x": 1294,
                "y": 415,
                "dist": 1359
 },
            {
                "id": 26,
                "x": 1261,
                "y": 542,
                "dist": 1373
 },
            {
                "id": 27,
                "x": 1360,
                "y": 469,
                "dist": 1439
 },
            {
                "id": 28,
                "x": 1418,
                "y": 276,
                "dist": 1445
 },
            {
                "id": 29,
                "x": 1354,
                "y": 584,
                "dist": 1475
 },
            {
                "id": 30,
                "x": 1446,
                "y": 443,
                "dist": 1512
 }]
    };







    //svg的宽度和高度  
    var w = 1000;
    var h = 700;
    var padding = 30;
    //初始化数据点  
    //   var dataset = [];
    //var dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],[410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];
    //var dataset = [[80, 80], [200, 100], [200, 200], [100, 200], [210, 200], [300, 40]];
    var dataset = [];
    for (var da in position.Position) {
        dataset.push([position.Position[da].x, position.Position[da].y]);
    }
    //        var numDataPoints = 15;
    //        //x轴最大的数值  
    //        var xRange = Math.random() * 1000;
    //        //y轴最大的数值  
    //        var yRange = Math.random() * 1000;
    //        for (var i = 0; i < numDataPoints; i++) {
    //            var newNumber1 = Math.floor(Math.random() * xRange);
    //            var newNumber2 = Math.floor(Math.random() * yRange);
    //            dataset.push([newNumber1, newNumber2]);
    //        }
    //创建刻度尺  
    var xScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (d) {
            return d[0];
        })])
        .range([padding, w - padding * 2]);
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (d) {
            return d[1];
        })])
        .range([h - padding, padding]);
    var rScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (d) {
            return d[1];
        })])
        .range([2, 5]);
    var m = [];
    //获取所有坐标位置
    var dataset1 = function (datasetA) {
        //var datasetA = [[80, 80], [200, 100], [200, 200], [100, 200]];
        var dataget1 = new Array();
        for (var i = 0; i < datasetA.length; i++) {
            var dataget2 = new Array();
            dataget1[i] = new Array();
            dataget2.push([xScale(datasetA[i][0]), yScale(datasetA[i][1])]);
            dataget1[i].push(dataget2);
        }
        m = dataget1;
        return dataget1;
    }
     
     //获取所有站点位置
   var datasetP=function (datasetA){
       var datagetP=new Array();
       for(var i=0;i<datasetA.length;i++){
           var datagetP2=new Array();
           datagetP[i]=new Array();
           datagetP2.push();
       }
   }
      
    var datasetList = new Array();
    var datasetListP = new Array();
     for (var itemP in position.Position) {
                    datasetListP.push(position.Position[itemP].id);
     }
    if (way.Way.length != null && way.Way.length != "") {
        for (var item in way.Way) {
            //获取路径
            datasetList[item] = new Array();
            var result=way.Way[item].Way.split(",");
            for (var itemW=0;itemW<result.length;itemW++) {
                for (var itemP in position.Position) {
                    if (result[itemW] == position.Position[itemP].id) {
                        datasetList[item].push([position.Position[itemP].x, position.Position[itemP].y]);
                    }
                }
            }
            dataset1(datasetList[item]);
        }
        //dataset1();
        //定义x轴  
        // 而4.0你可以直接使用d3.axisTop, d3.axisRight, d3.axisBottom,d3.axisLeft 四种方法来生成轴。
        var xAxis = d3.axisBottom()
            .scale(xScale)
            .ticks(5);
        //定义y轴  
        var yAxis = d3.axisLeft()
            .scale(yScale)
            .ticks(5);
        //创建svg元素  
        var svg = d3.select("body")
            //    .attr("background","image/d17057b.jpg")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("version", "1.1")
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
            .attr("xml:space", "preserve")
            .attr("class", "circle-load-rect-svg")
            .attr("viewBox", "0 0 1000 700");




        //创建圆形  
        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return xScale(d[0]);
            })
            .attr("cy", function (d) {
                return yScale(d[1]);
            })
            .attr("r", function (d) {
                return rScale(d[1]);
            });
        //创建标签  
        svg.selectAll("text")
            .data(datasetListP)
            .enter()
            .append("text")
            .text(function (d) {
                return d;
            })
            .data(dataset)
            .attr("x", function (d) {
                return xScale(d[0]);
            })
            .attr("y", function (d) {
                return yScale(d[1]);
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "25px")
            .attr("fill", "green");
        var circle = svg.append("circle")
            .attr("r", 13)
            .attr("fill", "#ff7700")
            .attr("transform", function () {
                return "translate(" + m[0] + ")";
            });
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + (h - padding) + ")")
            .call(xAxis);

        //将y轴追加到g元素中  
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding + ",0)")
            .call(yAxis);
        //    svg.insert("g", "g")
        //        .selectAll("path")
        //        .data(dataset)
        //        .enter()
        //        .append("path")
        //        .attr("d", "m 10 25 l 10 75 l 60 75 l 10 25") //使用线段生成器
        //        .attr("stroke", "yellow")
        //        .attr("stroke-width", "1px")
        //        .attr("fill", "none");
        //给小车画路径
        var datasetListss = new Array();
        var lineColor=["#23A5F7","#23f75a","#6123f7","#ceda17","#17dada","#a1d99b"];
        if (way.Way.length != null && way.Way.length != "") {
            for (var itemss in way.Way) {
                datasetListss[itemss] = new Array();
                var result=way.Way[itemss].Way.split(",");
                for (var itemWs=0;itemWs<result.length;itemWs++) {
                    for (var itemPs in position.Position) {
                        if (result[itemWs] == position.Position[itemPs].id) {
                            datasetListss[itemss].push([position.Position[itemPs].x, position.Position[itemPs].y]);
                        }
                    }
                }
                var kk = svg.append("polyline")
                    .attr("points", dataset1(datasetListss[itemss])) //使用线段生成器
                    .attr("class", "g-rect-path");
                svg.append('polyline')
                    .attr("points", dataset1(datasetListss[itemss]))
                    .attr("class", "g-rect-fill")
                    .attr("stroke",lineColor[itemss]);

                transition();

                function transition() {
                    circle.transition()
                        .duration(1350)
                        .attrTween("transform", translateAlong(kk.node()))
                     //   .each("end", transition);
                }

                // Returns an attrTween for translating along the specified path element.
                function translateAlong(path) {
                    var l = path.getTotalLength();
                    return function (d, i, a) {
                        return function (t) {
                            
                            var p = path.getPointAtLength(t * l);
                            debugger
                            return "translate(" + p.x + "," + p.y + ")";
                        };
                    };
                }
            }
        }

    }
</script>

