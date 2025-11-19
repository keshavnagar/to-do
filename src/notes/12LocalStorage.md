# so firsttly i just add the line localstorage.setitem , and see the result

1. add with setitem 
2. everytime i click on add task, and it renders and the whole todos to localstorage with that signle line that i added, commited and pushed into lecture5 branch
3. but one thing i not undestand wehn i click on refresh it doesnt refreshed
4. so now i will learn this part
5. apne ko todo ke tease karne kee need nahi hai becuase ye to pahle hee todos me add ho jayega to todos ke andar ek tarah se objects honge , and ye apan ek sath add kar denge that's it
6. so mene sabse pahle ek chij aur sikhi hia ki jo key hoti hai jo apan set karte samay dalte hai usey apan bad me bhi use karnege to usey apan ek variable ka use karenge 
7. aur mene ek aur chij ka attempt ye kiya ki mene vidoe na dekte huye pahle hee apne mann se vo chij ki jo video me wali hogi
8. like use state ke andar arrow funciton ka use karke data ko retrieve karne ki koshish taki vo refresh ho to vapas se hate na aur apne ko as it is dikhe
9. one more thing is , jo mene koshish ki thie , retrievel of data ke liye vo bilkul right thi, but jo error ayi, usse mujhe ye laga ki yar its just an attempt 
10. but mujhe ek chij aur yaha par dekhni chahiye , vo hai ki mujhe error dekhna sikhna hoga , to erro kuch is prakar thi: 
11. Uncaught SyntaxError: "undefined" is not valid JSON
    at JSON.parse (<anonymous>)
    at ToDo.jsx:11:27
    at mountStateImpl (react-dom_client.js?v=6841e867:6109:26)
    at mountState (react-dom_client.js?v=6841e867:6130:24)
    at Object.useState (react-dom_client.js?v=6841e867:18734:20)
    at exports.useState (chunk-AURW3RCX.js?v=6841e867:981:36)
    at ToDo (ToDo.jsx:9:29)
    at Object.react_stack_bottom_frame (react-dom_client.js?v=6841e867:18507:20)
    at renderWithHooks (react-dom_client.js?v=6841e867:5652:24)
    at updateFunctionComponent (react-dom_client.js?v=6841e867:7473:21)
12. apne ko yaha par ek chij yaad rakhni hai ki parse me jo data apan dal rahe hai na vo hai null, kyu hai null jaise starting me , apna todos ek array ahi , array start me null hai , aur start rendering me null jayega parse me to parse usey undefiened json data manega
13. const [todos, setTodos] = useState(() => {
    const getTodosString = localStorage.getItem(todoLocalKey);
    const getTodos = JSON.parse(getTodosString);
    return getTodos;
});
14. like hame yaha par starting me kuch bhi nahi milega todos me todos [], ye hai aur iska means hai , null to vo undefine kah raha hai , like , iska flow samjhte hai 
15. pahle getitem ne todoLocal ko pukara jo abhi emptly ahi []
16. fir is empty ko gettodos me insert kiya 
17. aur emptly ko null banaya aur null parse nahi hua 
18. so first time me hee ye hoga , jab apan koi data nahi karenge but har bar aisa nahi hoga , har bar jab render hoga react me to vo yadi data hoga to usey barabar state use karta hai , and use state me to apne ko pata hee hai ki yadi data emptly hota hai to vo state alag behave karti hai and yadi usme data hota hai to alag behave karti hai to apan bas abhi us state ke andar apne pass do thing hai state me empty bhi hai data and emtyness me vo data getitem ke thrugh ek variable me jake parse bhi hora ahi to apan jab data empty hoga to usey apan parse nahi karenge to iske liye apan ek conditino laga denge
19.   const [todos, setTodos] = useState(() => {
    const getTodosString = localStorage.getItem(todoLocalKey);
    if(!getTodosString)
    {
      return []
    }
    else
    {
      const getTodos = JSON.parse(getTodosString)
      return getTodos
    }
  });
  20. so apan kuch is prakar se pahle check karenge ki data undefine ya falsy to nahi hai , ab yaha par problem ye ari thi mujhe ki me falsy wali condition samajh nahi para tha 
  21. like if(getTodosstring) jab me likh raha tha to ye false thi aur isme jo likha tha vo chal nahi raha tha aru iske else wala chalr ra tha to me confused ho gaya , to ek bat yad rakhana hia ki , jab false hai aur check karna hia ki value falsy hai , null, undefine hai to apne ko bas usme check karne ke liye ! ye laga denge yadi ye true ho jayega to samajh jayenge ki han ye galat ahi jo is conditin ko true kar degin means ye falsey hai aur apan jo bhi likhna chahte hai vo chal jayega
  