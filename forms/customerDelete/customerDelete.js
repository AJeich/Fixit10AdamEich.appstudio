
customerDelete.onshow=function(){
     let query = "SELECT DISTINCT name FROM customer""
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query);

    if (req1.status = 200) {

  results = JSON.parse(req1.responseText)

 if (results == 0) {

} else {

  let message = ""

  for (i = 0; i <= results.length - 1; i++) {

    message = message + results[i][0] + "\n"

    }

    txtAreaCustomer.value = message

  }

  } else {

  }
  
btnGo.onclick=function(){
 let selection = inptCustomer.value

let query = "DELETE name FROM customer WHERE name = " + '"' + selection + '"'

  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)

    if (req1.status = 200) {

        results = JSON.parse(req1.responseText)

          if (results == 0) {

        } else {

          lblCompany1.value = results + "\n"

            }

} else {

    } 
}
