# we create firsstly a section for this 

  <section className="flex flex-col gap-2">
        {todos.map((item) => {
          return <div className="bg-green-300">{item}</div>;
        })}
    </section>

so we display the todos with the help of our map method
and also added some css to it 



