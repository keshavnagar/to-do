# handle todos
1. ab apne ko sochna hai ki jo bhi input apan dalenge apne todos me, to jo bhi input hoga for us , the input is todo to todos, aur todo todos me add hota jaye , but ek condition hai ki todo jo hai vo empty nahi hona chahiye
2. to apan ne  const handleTodos = (e) => {
      e.preventDefault();
      if(!todo) return;
  }

  isme jo condition mene yahi likhi hai ki yadi todo empty hai to usey pahle hee return kardo funcitno ko like kuch add mat karo okay aur yadi vo emptly nahi hai to usme kuch hoga hee sahi to usey add kardo apane todos me jo ki niche me lihunga
3. so hamne sabse pahle jo bhi hamare pass todo state ki value thi usey todos ke andar setTodos((prev)=>[...prev, todo]) kee help se mene add kar diya ab ek aur logic yad aya ki add karne ke bad input value empty honi chahiye to vo bhi mene kardi hai with the help of setTodo("")
4. ab me ek work karunga ki check kaurnga pura flow 
5. one more thing like koi bhi task repeat nahi honi chahiye, to apan ek kam karenge ek loop chalayenge array par aur check karnenge ki ye task pahle kai thi ki nahi yadi thi to apan ek alert karwa denge aur usko add nahi karenge
6.   const handleTodos = (e) => {
    e.preventDefault();
    if (!todo) return;
    if (todos.includes(todo)) {
      alert(`${todo} is already there`);
      return;
    }
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };
so here i add the another logic that is check current task is already there or not if there than it give the alert and return from the whole function and the include method is good to check for presence of an element there or not

