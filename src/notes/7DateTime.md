# date and time
1. added the date
2. added the time 
3. but in time, time is static, like not flow by second live to my eyes
4. so we want to create the live time that is maybe with the help of settimeout or setinterval method
5. so now i watch the soluiton in video
6. first i create set interval funciton 
7. and copy all the variable that store the date and time 
8. ReferenceError: formattedDate is not defined, this error is occured when i copy paste my three line of declaration of time and date code
9. now we store date and time into one use state variable
10. set interval ke andar data and time ke varibal banake har 1 seconds me value put ki okya
11. jo bhi ye values change hori hai har second me unhe ham ek state me rakh lete hai taki globally ham usey use kare 
12. ab jab ham to setstate funciton ko jo hamne do varibale define kiye hai unhe, is set state funciton ke andar rakh lete hai 
13. ab chuki apne pass do values thi to apan ne `` iska use karke ${} aur iska use karke un dono values ko ek hee state me store kar liya taki apan ek variable se hee dono ko dikha sake sath me apna kam bhi ho jaye 
14. state lane ka use ye tha ki jab vo erro ari thi is not define wali to apan ne dono ko ek state me rakh liya 
15. ek sum variable ke andar apan ne do other variables ko add karke unka result us sum ke andar rakh liya 
16. aur us sum fir apan ne use kar liye
17. but yaha par apne ko un dono varibal ka rup dikh raha hai aur `` ki help se apan ne string aur varibale dono ko dynamically bhi dekha hai to isme koi bhi ghabrane keee need nahi hai 
18. but yaha par ek kami hai , kami ye hai ki , setinterval har second chal rahah hai aur uski valjah se state update ho rahahi hia aur state update ho rahai hai to vo har second render ho raha hai , tu ye check karnek ke liye console.log return ke upar kahi par bhi likh tujhe vo har seoncod lkhega hee likhega
19. to chuki ye every second render ho raha hai to , ham isey clear interval kee help se handle kar sakte hai 
20. 