jQuery( document ).ready(function( $ ) {


	"use strict";

        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
        

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });
        
        if ($('.owl-clients').length) {
            $('.owl-clients').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }

        $(document).ready(function() {
            // Kích hoạt modal khi nhấn vào nút "Hourly Nanny"
            $(".filled-button").click(function() {
                $("#hourlyNannyModal").modal('show');
            });
        
            // Xử lý khi chọn checkbox "Đặt lịch cả ngày"
            $("#fullDay").change(function() {
                if ($(this).is(":checked")) {
                    $("#startTime").val("").prop("disabled", true);
                    $("#endTime").val("").prop("disabled", true);
                } else {
                    $("#startTime").prop("disabled", false);
                    $("#endTime").prop("disabled", false);
                }
                calculateCost();
            });
        
            // Xử lý khi thay đổi giờ bắt đầu và kết thúc
            $("#startTime, #endTime").change(function() {
                calculateCost();
            });
        
            // Hàm tính toán chi phí
            function calculateCost() {
                let startTime = parseInt($("#startTime").val()) || 0;
                let endTime = parseInt($("#endTime").val()) || 0;
                let hours = 0;
                
                if ($("#fullDay").is(":checked")) {
                    hours = 24;
                } else if (startTime < endTime) {
                    hours = endTime - startTime;
                }
        
                let cost = hours * 150000;
                
                $("#totalHours").text(hours);
                $("#totalCost").text(cost.toLocaleString('vi-VN'));
            }
        });
        

        // Add this to your assets/js/custom.js file or at the bottom of your HTML file before the closing </body> tag

$(document).ready(function() {
    // Daily Nanny modal date calculation
    $("#startDate, #endDate").on("change", function() {
        let startDate = new Date($("#startDate").val());
        let endDate = new Date($("#endDate").val());
        
        if (!isNaN(startDate) && !isNaN(endDate) && endDate >= startDate) {
            let totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1; // Include both start and end day
            let totalCost = totalDays * 450000;
            $("#totalDays").text(totalDays);
            $("#totalCost").text(totalCost.toLocaleString() + " VND");
        } else {
            $("#totalDays").text("0");
            $("#totalCost").text("0 VND");
        }
    });
});

        
        if ($('.owl-banner').length) {
            $('.owl-banner').owlCarousel({
                items: 1,          // Hiển thị 1 ảnh mỗi lần
                loop: true,        // Lặp vô hạn
                nav: true,         // Hiện nút điều hướng
                dots: true,        // Hiện chấm điều hướng
                autoplay: true,    // Tự động chạy slide
                autoplayTimeout: 2000, // 3 giây đổi ảnh
                autoplayHoverPause: true, // Dừng khi rê chuột vào
                animateOut: 'fadeOut', // Hiệu ứng chuyển ảnh mượt
                responsive:{
                    0:{ items:1 },  
                    600:{ items:1 },  
                    1000:{ items:1 }  
                }
            });
        }
});