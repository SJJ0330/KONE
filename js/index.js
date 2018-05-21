
 
 
 //填写个人信息展开

 $(function () {
    $("#flip").click(function () {

      $(".panel-hide").slideDown();
    //   $(".kkk").hide();                           ///找不到kkk
      $(".addMore").fadeIn();

    })
 })


 //单选按钮文本颜色切换
 $(function (){  
    // $("input[type='radio']").first().next().css('color','#0071b9');     //.blue-color 
    $("input[type='radio']").first().next().css('color','#949494');
    $(":radio").click(function (){  
        $("input[type='radio']").each(function(){  
        if(this.checked){  
            $(this).next().css('color','#0071b9');  
        }else{  
            $(this).next().css('color','#949494');  //.grey-color
        }  
    });  
  
    });  
 });

//表单验证
 $(function () {  
    $("#k-form").bootstrapValidator({  
        live: 'disabled',//验证时机，enabled是内容有变化就验证（默认），disabled和submitted是提交再验证  
        excluded: [':disabled', ':hidden', ':not(:visible)'],//排除无需验证的控件，比如被禁用的或者被隐藏的  
        submitButtons: '#btn-submit',//指定提交按钮，如果验证失败则变成disabled，但我没试成功，反而加了这句话非submit按钮也会提交到action指定页面  
        message: '通用的验证失败消息',//好像从来没出现过  
        // feedbackIcons: {//根据验证结果显示的各种图标  
        //     valid: 'glyphicon glyphicon-ok',  
        //     invalid: 'glyphicon glyphicon-remove',  
        //     validating: 'glyphicon glyphicon-refresh'  
        // },  
        fields: {  
            // text: {  
            //     validators: {  
            //         notEmpty: {//检测非空,radio也可用  
            //             message: '文本框必须输入'  
            //         },  
            //         stringLength: {//检测长度  
            //             min: 6,  
            //             max: 30,  
            //             message: '长度必须在6-30之间'  
            //         },  
            //         regexp: {//正则验证  
            //             regexp: /^[a-zA-Z0-9_\.]+$/,  
            //             message: '所输入的字符不符要求'  
            //         },  
            //         remote: {//将内容发送至指定页面验证，返回验证结果，比如查询用户名是否存在  
            //             url: '指定页面',  
            //             message: 'The username is not available'  
            //         },  
            //         different: {//与指定文本框比较内容相同  
            //             field: '指定文本框name',  
            //             message: '不能与指定文本框内容相同'  
            //         },  
            //         emailAddress: {//验证email地址  
            //             message: '不是正确的email地址'  
            //         },  
            //         identical: {//与指定控件内容比较是否相同，比如两次密码不一致  
            //             field: 'confirmPassword',//指定控件name  
            //             message: '输入的内容不一致'  
            //         },  
            //         date: {//验证指定的日期格式  
            //             format: 'YYYY/MM/DD',  
            //             message: '日期格式不正确'  
            //         },  
            //         choice: {//check控件选择的数量  
            //             min: 2,  
            //             max: 4,  
            //             message: '必须选择2-4个选项'  
            //         }  
            //     }  
            // }, 
            floorNum: {  
                validators: {  
                    notEmpty: {//检测非空,radio也可用  
                        message: '必须输入楼层数'  
                    }
                }
            },
            addFloor: {  
                validators: {  
                    notEmpty: {//检测非空,radio也可用  
                        message: '必须输入提升高度/层高'  
                    }
                }
            },
            userNum: {  
                validators: {  
                    notEmpty: {//检测非空,radio也可用  
                        message: '必须输入使用人数'  
                    }
                }
            },
            length: {  
                validators: {  
                    notEmpty: {//检测非空,radio也可用  
                        message: '必须输入长度'  
                    }
                }
            },
            width: {  
                validators: {  
                    notEmpty: {//检测非空,radio也可用  
                        message: '必须输入宽度'  
                    }
                }
            },
            doorWidth: {  
                validators: {  
                    notEmpty: {//检测非空,radio也可用  
                        message: '必须选择门宽'  
                    }
                }
            },
            provence: {  
                validators: {  
                    notEmpty: {//检测非空,radio也可用  
                        message: '必须选择省份'  
                    }
                }
            },
            name: {  
                validators: {  
                    notEmpty: {//检测非空,radio也可用  
                        message: '必须输入姓名'  
                    }
                }
            },
            sex: {  
                validators: {  
                    notEmpty: {//检测非空,radio也可用  
                        message: '必须选择性别'  
                    }
                }
            },
            phoneNum: {  
                validators: {  
                    notEmpty: {//检测非空,radio也可用  
                        message: '必须输入联系电话'  
                    },
                    stringLength: {//检测长度  
                        min: 11,
                        max: 11,  
                        message: '请输入11位手机号码'  
                    },  
                    regexp: {//正则验证  
                        // regexp: /^[a-zA-Z0-9_\.]+$/, 
                        regexp: /^1[3|5][0-9]\d{4,8}$/, 
                        message: '请输入正确的号码'  
                    }
                }
            },
            yzm: {  
                validators: {  
                    notEmpty: {//检测非空,radio也可用  
                        message: '必须输入验证码'  
                    }
                }
            }
            
        }  
    });  
    $("#btn-submit").click(function () {//非submit按钮点击后进行验证，如果是submit则无需此句直接验证  
        $("#k-form").bootstrapValidator('validate');//提交验证  
        if ($("#k-form").data('bootstrapValidator').isValid()) {//获取验证结果，如果成功，执行下面代码  
            alert("表单填写完成，即将提交！");//验证成功后的操作，如ajax  
            //最好再添加一个提交按钮
        }  
    });  
});      


// function checkMobile(){
    //     var sMobile = document.form.phoneNum.value;
    //     if(!(/^1[3|5][0-9]\d{4,8}$/.test(sMobile))){
    //         alert("号码错误,请输入正确的手机号")
    //         document.form.phoneNum.focus();
    //         return false;
    //     }

    // }   

    
//轿厢装潢图片选择切换
//效果一：点击选中，再次点击不取消，只能选择一张图片
$(function () {
    $(".addImg").each(function () {
        $(this).click(function () {
            $(".addImg").removeClass("icon");
            $(this).addClass("icon");

            var selectImgId = $(this).attr("id");
            //alert($(this).attr("id"));
        })
    });
}); 

//效果二：点击选中，再点击取消,能选择多张图片   
// $(function () {
//     $(".addImg").each(function () {
//         $(this).click(function () {
//             if ($(this).hasClass("icon")) {
//                 $(this).removeClass("icon");
//             } else {
//                 $(this).addClass("icon");
//             }
//         });
//     });
// });

//阻止回车事件
$(document).keydown(function(event){
    switch(event.keyCode){
       case 13:return false; 
       }
});

// //发送验证码倒计时
// var countdown=60; 
// function sendemail(){
//     var obj = $("#btn-submit");
//     settime(obj);
    
// }
// function settime(obj) { //发送验证码倒计时
//     if (countdown == 0) { 
//         obj.attr('disabled',false); 
//         //obj.removeattr("disabled"); 
//         obj.val("免费获取验证码");
//         countdown = 60; 
//         return;
//     } else { 
//         obj.attr('disabled',true);
//         obj.val("重新发送(" + countdown + ")");
//         countdown--; 
//     } 
// setTimeout(function() { 
//     settime(obj) }
//     ,1000) 
// }


    $(function () {
        $("#btn-submit").click(function () {
            var phones = $.trim($(".j-telphone").val());//删除字符串开始和末尾的空格
            var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;//验证电话号码格式
            if (!phones) {
                $('.tel-msg').text('请输入手机号码，不能为空');
                return false;
            } else if (!isMobile.test(phones)) {
                $('.tel-msg').text('请输入有效的手机号码');
                return false;
            } else {
                //手机号码是否存在
                $.ajax({
                    url: "/", //
                    type: "post",
                    dataType: "JSON",
                    data: {
                        phones: phones,
                    },
                    contentType: 'application/json;charset=UTF-8',
                    //async: false,
                    success: function (data) {
                        if (data.flag == "1") { //
                            $('.tel-msg').html(data.errorInfo); //
                            return false;
                        } else {
                            $('.tel-msg').html(data.errorInfo); //可
                        }
                    },
                    error: function () {
                    }
                });
            }
        })
        //验证码倒计时 
        var InterValObj; //timer变量，控制时间 
        var count = 60; //间隔函数，1秒执行 
        var curCount;//当前剩余秒数 
        var code = ""; //验证码 
        var regType;
        var phoneTemplet;
        var codeLength = 4;//验证码长度 
        $(".code-btn").click(function () {
            curCount = count;
            var phone = $.trim($(".j-telphone").val());//手机号码 
            var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            var jtel = $(".j-telphone");
            if (phone != "" && isMobile.test(phone) && phone.length == 11) {
                //设置button效果，开始计时 
                // $("#btnSendCode").attr("disabled", "true");
                // $("#btnSendCode").val("请在" + curCount + "秒内输入验证码");
                $("#btn-submit").attr("disabled", "true");
                $("#btn-submit").val("重新发送(" + curCount + ")");
                InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次 
                //产生验证码 
                for (var i = 0; i < codeLength; i++) {
                    code += parseInt(Math.random() * 9).toString();
                }
                //向后台获验证码 
                $.ajax({
                    url: base + "/",
                    type: "POST",
                    // dataType: "text", 
                    // data: "phones=" + phone + "&code=" + code, 
                    dataType: "JSON",
                    data: {
                        phones: phone,
                        code: code,
                        regType: "1",
                        phoneTemplet: "phone_uc"
                    },
                    success: function (data) {
                        if (data.flag == "F") {
                            $(".code-msg").html(data.errorInfo);
                        } else {
                            $(".code-msg").html(data.errorInfo);
                        }
                    }
                });
            } else {
                $('.tel-msg').text('请输入有效的手机号码');
            }
        });
        //timer处理函数 
        function SetRemainTime() {
            if (curCount == 0) {
                window.clearInterval(InterValObj);//停止计时器 
                $("#btn-submit").removeAttr("disabled");//启用按钮 
                $("#btn-submit").val("重新发送验证码");
                code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效 
            }
            else {
                curCount--;
                // $("#btn-submit").val("请在" + curCount + "秒内输入验证码");
                $("#btn-submit").val("重新发送(" + curCount + ")");
            }
        }
    })

    