# handle todos
1. ab apne ko sochna hai ki jo bhi input apan dalenge apne todos me, to jo bhi input hoga for us , the input is todo to todos, aur todo todos me add hota jaye , but ek condition hai ki todo jo hai vo empty nahi hona chahiye
2. to apan ne  const handleTodos = (e) => {
      e.preventDefault();
      if(!todo) return;
  }

  isme jo condition mene yahi likhi hai ki yadi todo empty hai to usey pahle hee return kardo funcitno ko like kuch add mat karo okay aur yadi vo emptly nahi hai to usme kuch hoga hee sahi to usey add kardo apane todos me jo ki niche me lihunga
3. so hamne sabse pahle jo bhi hamare pass todo state ki value thi usey todos ke andar setTodos((prev)=>[...prev, todo]) kee help se mene add kar diya ab ek aur logic yad aya ki add karne ke bad input value empty honi chahiye to vo bhi mene kardi hai with the help of setTodo("")
4. ab me ek work karunga ki check kaurnga pura flow 