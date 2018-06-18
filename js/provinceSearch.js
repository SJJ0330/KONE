/**
 * Created by chenweixuan on 2018/5/29.
 *
 * 引入“provinceSearch.js”、“provinceSearch.css”
 * 把省份的 input 加上 name="province" 即可，如：
 * <input type="text" class="form-control" name="province">
 *
 *
 *
 *
 *
 */




//省份模糊查询
    $("input[name=province]").after("<ul class='k-result'></ul>")
    var a = ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "上海", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "台湾", "香港", "澳门"];
    var b = ["beijing", "tianjin", "hebei", "shanxi", "neimenggu", "liaoning", "jilin", "heilongjiang", "shanghai", "jiangsu", "zhejiang", "anhui", "fujian", "jiangxi", "shandong", "henan", "hubei", "hunan", "guangdong", "guangxi", "hainan", "zhongqing", "sichuan", "guizhou", "yunnan", "xizang", "shanxi", "gansu", "qinghai", "ningxia", "xinjiang", "taiwan", "xianggang", "aomen"];
    $("input[name=province]").bind('input propertychange', function () {
        var k_in = $("input[name=province]").val();
        // console.log(k_in)
        var CNreg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
        var ENreg = new RegExp(/^[A-Za-z]+$/);
        var CNresult = [];
        if (CNreg.test(k_in)) {
            // console.log("CN");
            var a_length = a.length;
            for (var _i = 0; _i < a_length; _i++) {
                if (a[_i].match(k_in)) {
                    CNresult.push(a[_i]);
                }
            }
            // console.log(CNresult);
        } else if (ENreg.test(k_in)) {
            // console.log("EN");
            var b_length = b.length;
            for (var _f = 0; _f < b_length; _f++) {
                if (b[_f].match(k_in)) {
                    CNresult.push(a[_f]);
                }
            }
        }
        // console.log(CNresult);
        $(".k-result").empty();
        for (var i = 0; i < CNresult.length; i++) {
            $(".k-result").prepend("<li>" + CNresult[i] + "</li>")
        }
        $(".k-result li").click(function () {
            $("input[name=province]").val($(this).html());
            $(".k-result").empty();
        })
        $(document).click(function () {$(".k-result").empty(); })


    })