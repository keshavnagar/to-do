1. now we add the delete funcitonality
2. so first we need to delete any thing we trigger the event
3. and if event trigger we call funciton and in that funciton we delete that element that match in the todo, we just remove that element from the state and we update the state
4. so first we create a onclick
5. and i call a callback function inside the onclick
6. and and pass the item that is we have in our every div or the parent of button
7. than i pass this item to the handledelete funciton 
8. and than i define the logic
9. first i find the index of the item 
10. and than, if the index is greater than one, by mistake it is the negative so i handle that thing, so i create the condition and than put the splice method with the two paramenter first is index that track the item in todos array and 1 that is the number of item we delete from the array and than set the set state funciton and give the current todos or spliced todos to set state funciton 
11. and deleted the element
12. so here we use splice method, now we use the filter method 
13. in filter method , the one thing i notice is , i also called a callback funciton in which i pass curr, and i write curr ! == item , in {} , but it deleted all , but the right thing is do not use {} if you have one line and if you , than write return inside that 