# set the state for input value
1. first we create the state for the input 
2. input me value attribute hai, to value ke andar jab ham direct state value ko assign kar dete hai to ye ek warning deta hai ki tumne pahle value ko change nahi kar sakte, just jo initial value hai like , use state me initial value is empty string, to vo to hame dikhegi nahi , and one more thing like ham jab input me kuch likhne ki try karenge to ham nahi likh sakte, kyuki vo ek tarah se immutabel ho chuka hai 
3. to ab me thoda optimize bhi kar sakta hu ek input handler karke funciotn banake me karta hu 
4. sabse pahle me  onChange={(e)=>{handleTodo(e)}} ye likha hai okay 
5. ab mene yaha par e pass kiya hai to ye jo onchange funciton hai, vo ek e pass kar rha hai as an argument, aur isey jo mera handleTodo funciton hai vo as a parameter lera hai simple
6. ab is e ke pass event se related sari infor hai like jo bhi me keys daba raha hu un sabke details hai 
7. jasie e dabaya to e dabate hee ye function trigger ho jayega and hame pata chal jayega kee mene e dabaya hai 
8. ab ye e ko ham is handleToDo funciton me pass kar dete hai aur fir apan setTodo se jo bhi next value hai usme add kar dete hai, so simple thing ye hai ki jaise hee mene f dabaya to ye bhi us particular input ki value me add ho jayega like jo value hogi vo particular ek value hoti hai , haina jaise apan ne a likha to value hai e , yadi mene likha d to value hogi ed fir mene likha a , to ho jayega eda to aise work karega
9. ab handleTodo fuction me apane is e ko get karenge 
10. us e ki help se apan jo bhi state ki value hai usey set karnege jo bhi current value hogi vo jo ki hoti e.targe.value jo kee mene upar samajhaya hai 
11. const handleTodo = (e) => {
      setTodo(e.target.value)
  }
  so yaha par mene set kardi hai value kuch is prakar se 
12. ab meri next task hai ki me onsubmit pe jo array hai usey kaise karunga 
13. ab onsubmit pe mujhe ek doubt aya hai jo ki hai ki apan ne kuch is prakar funciotn define kiya hai 
    onSubmit = {(e)=>{handleTodos(e)}}
    onSubmit = {handleTodos}
    so both are the same like yadi me define karunga to vaha par dono ke pass e value ayegi kay already?
    