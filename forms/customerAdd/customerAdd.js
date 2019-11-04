
btnAdd.onclick=function(){
 let queryAdd = "INSERT INTO customer (name, city, street, state, zip) VALUES ('Jesse Antiques', '1113 F St', 'Omaha, NE', '68178' 

req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aje46755&pass=Cjays@100&database=aje46755&query=" + query)

if (req1.status == 200) { //transit worked.

if (req1.responseText == 500) {
  alert("Added")

} else {
  alert("Error: name was not added")

} else {
  alert("error: " + req1.status)
  
}

}
