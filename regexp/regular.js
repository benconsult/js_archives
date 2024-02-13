/*replace - search for a pattern and replace with a substring
//if no g. replace text by default. ig gi or g , Capitalizes the first letter of the replaced string.
const str = 'for God so love the world that he gave his only begotten son , that whosoever believth\
beliwveth in him should  not perish\
but have yeshua eternal life'

output = str.replace(/God|god/g, 'Yesua')
console.log(output)

*/
//removes percentage from text
const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

replaced = txt.replace(/%/g,'')
console.log(replaced)