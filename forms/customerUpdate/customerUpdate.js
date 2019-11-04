
customerUpdate.onshow=function(){
     let query = "SELECT DISTINCT name FROM customer""
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query);

    if (req1.status == 200) {

  results = JSON.parse(req1.responseText)
  
  lblCompany.value = results + "\n"
  
 if (results == 0) {

} else {

  let message = ""

  for (i = 0; i <= results.length - 1; i++) {

    message = message + results[i][0] + "\n"

    }

    txtAreaCustomer2.value = message

  }

  } else {

  }
  
btnGo2.onclick=function(){
 let previousName = inptCustomer2.value
 let newName = inptCustomerNewName.value

let query = "UPDATE customer SET name = " + '"' + newName + '"'

  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)

    if (req1.status == 200) {

          if (req1.responseText == 500)
          
          txtAreaCustomer2.value = previousName + "updated to" + newName
        else 
          txtAreaCustomer2.value = "did not update" + oldName + "to" + newName
        } else {
          alert("error: " + req1.status)
}
        results = JSON.parse(req1.responseText)
        lblCompany2 = results

          if (results == 0) {

        } else {

          lblCompany2.value = results + "\n"

            }

} else {

    } 
}

btnResults.onclick=function(){
  lblCompany2 = ""
  let queryCustomerUpdate = "SELECT name FROM customer"
  
   req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)
  
  if (req1.status == 200) {
    resultsUpdate = JSON.parse(req1.responseText)
    lblCompany = resultsUpdate + "\n"
   
}


//