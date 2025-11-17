# sabse pahle to apne ko, strike through keasie lagate hai in tailwind css
# now we put condition, on button , when we click on that button than it is applied the line through
# so first, i create the state to for line through
# in div span tag where individual item is there than, i put the state into span tag's class, and write condition, if the state value is true than , add css line thourgh in span text , else nothing
# and than i toggle set state funciotn in onclick , in to call back funciton 
# than done 
# now we follow the other way that created by youtube video
# in first we assign the input value to todo state , but now we assign the object to todo state, like now the state is not a string but it is an object of some properties, so now we do 
# and instead or todo we write the state.content
# now the next challenge is in our handletodos funciton , so the if conditino is as it is , but in check like it is exist the same object or not this logic will be different 
# for this, i'll check this with the help of some funciton in which i pass the callback funciton and store that result in exist variable and check if exist is true than return and give alert else add into todos array
# so the checking the object is exist or not in our todos array is working 
# so we also empty the input box after click on add task 
# also remove the key from list component
# also remove the the error of state in which , where we add signle value , instead we add the object , like we add the object in a way of id, content and checked