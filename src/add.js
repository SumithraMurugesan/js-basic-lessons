var items = [];
let add = () => {

    const personname = document.getElementById("pname").value;
    const adhar = document.getElementById("adhar-no").value;
    const dob = document.getElementById("dob").value;
    const city = document.getElementById("city").value;
    const dateoftet = document.getElementById("dot").value;
    const timeoftest = document.getElementById("tot").value;
    const resultP = document.getElementById("positiveP").value;
    const result1N = document.getElementById("negativeN").value;
    const labname = document.getElementById("lab").value;
    const reportno = document.getElementById("report").value;
    const gender = document.getElementById("male").value;
    const gender1 = document.getElementById("female").value;
    console.log(personname);

    items.push(personname);
    items.push(adhar);
    items.push(dob);
    items.push(city);
    items.push(dateoftet);
    items.push(timeoftest);
    items.push(resultP);
    items.push(result1N);
    items.push(labname);
    items.push(reportno);
    items.push(gender);
    items.push(gender1);
    
     console.log(items);

    //  items.push('personName:'+personname);
    //  items.push('adhar no'+adhar);
    //  items.push('Dob'+dob);
    //  items.push('City'+city);
    //  items.push('DateOfset'+dateoftet);
    //  items.push('TimeOfTest'+timeoftest);
    //  items.push('ResultP'+resultP);
    //  items.push('ResultN'+result1N);
    //  items.push('LabName'+labname);
    //  items.push('ReportNo'+reportno);
    //  items.push('Gender'+gender);
    //  items.push('Gender1'+gender1);
    //   console.log(items);

    
    // let data = "\r Person name: " + personname + " \r\n " 
    // + "Adhar No: " + adhar + " \r\n " 
    // + "DOB: " + dob+ " \r\n " 
    // + "city: " + city + " \r\n " 
    // + "dateoftet: " + dateoftet;
    // + "timeoftest: " + timeoftest+ " \r\n " 
    // + "result: " + resultP + " \r\n " 
    // + "result1: " + result1N + " \r\n " 
    // + "labname: " + labname;
    // + "reportno: " + reportno+ " \r\n " 
    // + "gender: " + gender + " \r\n " 
    // + "gender1: " + gender1 + " \r\n " 
    // console.log(data);
    // // alert(data) 
    for (var i=0; i<items.length; i++) {
        document.getElementById("display").innerHTML=items[i];
      }
    
}

// function display() {
//     for (var i=0; i<items.length; i++) {
//         document.write("<td>" + items[i] + "</td>");
//       }
// }


