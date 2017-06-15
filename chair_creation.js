 $(document).ready(function () {
    $('#logo').click(function(){
        // var a = document.getElementById("color").style;
        // a.color = randomColor();
        var number = Math.floor(Math.random() * 6) + 1;
       console.log(number)
       if(number==1){
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#red').show()
       }
       else if(number==2){
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#green').show()
       }
       else if(number==3){
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#blue').show()
       }
       else if(number==4){
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#yellow').show()
       }
       else if(number==5){
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#black').show()
       }
       else{
            $('#red').hide()
            $('#green').hide()
            $('#blue').hide()
            $('#yellow').hide()
            $('#black').hide()
            $('#brown').hide()
            $('#brown').show()
       }
    });

    // $('#physical_activity').click(function(){
    //     var physical_activity = $('#physical_activity').val()
    //     console.log(physical_activity)
    //     if(physical_activity=='No'){
    //         $('#activity').hide()
    //     }
    //     else{
    //         $('#activity').show()
    //     }
    //  });

     $('#radiating_symptoms').click(function(){
        var radiating_symptoms = $('#radiating_symptoms').val()
        console.log(radiating_symptoms_yes)
        if(radiating_symptoms=='No'){
            $('#radiating_symptoms_yes').hide()
        }
        else{
            $('#radiating_symptoms_yes').show()
        }
     });

     $('#stenosis').click(function(){
        var stenosis = $('#stenosis').val()
        console.log(stenosis)
        if(stenosis=='No'){
            $('#stenosis_yes').hide()
        }
        else if(stenosis=='Do Not Know'){
            $('#stenosis_yes').hide()
        }
        else{
            $('#stenosis_yes').show()
        }
     });

    $('#chair_creation').click(function(){
        var patient_id=$("#patient_id").val()
        var back_height=$("#back_height").val()
        var back_width=$("#back_width").val()
        var hip_length=$("#hip_length").val()
        var customer_number=$("#customer_number").val()
        var sitting_hours=$("#sitting_hours").val()
        var nature_of_work=$("#nature_of_work").val()
        var additional_info1=$("#additional_info1").val()

        var general=$("#general").val()
        // var physical_activity=$("#physical_activity").val()
        // if(physical_activity=='Yes'){
        //     var which_activity=$("#which_activity").val()
        // }

        var disc_herniation=$("#disc_herniation").val()
        var radiating_symptoms = $("#radiating_symptoms").val()
        var choose_location=$("#choose_location").val()
        var stenosis=$("#stenosis").val()
        if(stenosis=='Yes'){
            var height_level=$("#height_level").val()
            var hardware_severiity=$("#hardware_severiity").val()
        }
        var hyperlordosis=$("#hyperlordosis").val()
        var kyphosis=$("#kyphosis").val()
        var scoliosis=$("#scoliosis").val()
        var pain=$("#pain").val()
        var additional_info2=$("#additional_info2").val()

        var chair_length=$("#chair_length").val()
        var chair_width=$("#chair_width").val()
        var chair_backrest=$("#chair_backrest").val()
        var seat_length=$("#seat_length").val()
        var seat_width=$("#seat_width").val()
        var chair_recline=$("#chair_recline").val()
       
        if(chair_length!='' && chair_width!='' && seat_length!='' && seat_width!=''){
            $('#information1').hide()
            $('#information2').show()
            document.getElementById('patient_id1').innerHTML=patient_id;
            document.getElementById('back_height1').innerHTML=back_height;
            document.getElementById('back_width1').innerHTML=back_width;
            document.getElementById('hip_length1').innerHTML=hip_length;
            document.getElementById('customer_number1').innerHTML=customer_number;
            document.getElementById('sitting_hours1').innerHTML=sitting_hours;
            document.getElementById('nature_of_work1').innerHTML=nature_of_work;
            document.getElementById('nature_of_work2').innerHTML=nature_of_work;
            document.getElementById('additional_info11').innerHTML=additional_info1;

            document.getElementById('general1').innerHTML=general;
            document.getElementById('general2').innerHTML=general;
            // document.getElementById('physical_activity1').innerHTML=physical_activity;
            // document.getElementById('physical_activity2').innerHTML=physical_activity;
            // document.getElementById('which_activity1').innerHTML=which_activity;

            document.getElementById('disc_herniation1').innerHTML=disc_herniation;
            document.getElementById('radiating_symptoms1').innerHTML=radiating_symptoms;
            document.getElementById('stenosis1').innerHTML=stenosis;
            document.getElementById('choose_location1').innerHTML=choose_location;
            if(stenosis=='Yes'){
                $('#stenosis').show()
                document.getElementById('height_level1').innerHTML=height_level;
                document.getElementById('hardware_severiity1').innerHTML=hardware_severiity;
            }
            document.getElementById('hyperlordosis1').innerHTML=hyperlordosis;
            document.getElementById('kyphosis1').innerHTML=kyphosis;
            document.getElementById('scoliosis1').innerHTML=scoliosis;
            document.getElementById('pain1').innerHTML=pain;
            document.getElementById('pain2').innerHTML=pain;
            document.getElementById('additional_info22').innerHTML=additional_info2;

            document.getElementById('chair_length1').innerHTML=back_height;
            document.getElementById('chair_length2').innerHTML=back_height;
            document.getElementById('chair_width1').innerHTML=back_width;
            document.getElementById('chair_width2').innerHTML=back_width;
            document.getElementById('chair_backrest1').innerHTML=hip_length;
            document.getElementById('chair_backrest2').innerHTML=hip_length;
            document.getElementById('seat_length1').innerHTML=customer_number;
            document.getElementById('seat_length2').innerHTML=customer_number;
            document.getElementById('seat_width1').innerHTML=sitting_hours;
            document.getElementById('seat_width2').innerHTML=sitting_hours;
            document.getElementById('chair_recline1').innerHTML=nature_of_work;
            document.getElementById('chair_recline2').innerHTML=nature_of_work;


            $('#result').show()
            $('#chair2').hide()
            $('#chair3').hide()
            $('#chair4').hide()
            $('#chair1').show()
            // if(weight>0 && weight<=20){
            //     document.getElementById('person_name').innerHTML=name;
                
            // }
            // else if(weight>20 && weight<=40){
            //     document.getElementById('person_name').innerHTML=name;
            //     $('#chair1').hide()
            //     $('#chair3').hide()
            //     $('#chair4').hide()
            //     $('#chair2').show()
            // }
            // else if(weight>40 && weight<=60){
            //     document.getElementById('person_name').innerHTML=name;
            //     $('#chair1').hide()
            //     $('#chair2').hide()
            //     $('#chair4').hide()
            //     $('#chair3').show()
            // }
            // else if(weight>60 && weight<=2000){
            //     document.getElementById('person_name').innerHTML=name;
            //     $('#chair1').hide()
            //     $('#chair2').hide()
            //     $('#chair3').hide()
            //     $('#chair4').show()
            // }
        }
        else{
            swal({
                    title: "Please Fill Up Mssing Information.",
                    type: "warning",
                    confirmButtonText: "OK"
                })
        }
    });

    $('#plus').click(function(){
       var number = Math.floor(Math.random() * 4) + 1;
       console.log(number)
       if(number==1){
            $('#chair1').hide()
            $('#chair2').hide()
            $('#chair3').hide()
            $('#chair4').hide()
            $('#chair2').show()
       }
       else if(number==2){
            $('#chair1').hide()
            $('#chair2').hide()
            $('#chair3').hide()
            $('#chair4').hide()
            $('#chair3').show()
       }
       else if(number==3){
            $('#chair1').hide()
            $('#chair2').hide()
            $('#chair3').hide()
            $('#chair4').hide()
            $('#chair4').show()
       }
       else{
            $('#chair1').hide()
            $('#chair2').hide()
            $('#chair3').hide()
            $('#chair4').hide()
            $('#chair1').show()
       }
    });
    $('#minus').click(function(){
       var number = Math.floor(Math.random() * 4) + 1;
       console.log(number)
       if(number==1){
            $('#chair1').hide()
            $('#chair2').hide()
            $('#chair3').hide()
            $('#chair4').hide()
            $('#chair4').show()
       }
       else if(number==2){
            $('#chair1').hide()
            $('#chair2').hide()
            $('#chair3').hide()
            $('#chair4').hide()
            $('#chair1').show()
       }
       else if(number==3){
            $('#chair1').hide()
            $('#chair2').hide()
            $('#chair3').hide()
            $('#chair4').hide()
            $('#chair2').show()
       }
       else{
            $('#chair1').hide()
            $('#chair2').hide()
            $('#chair3').hide()
            $('#chair4').hide()
            $('#chair3').show()
       }
    });

    $('#submit').click(function(){
    swal({
            title: "Information Submitted Successfully.",
            type: "success",
            confirmButtonText: "OK"
            }).then(function () {
            window.location = "index.html";
        });
    });

    $('#cancel').click(function(){
        window.location = "create_new_chair.html";
    });
});