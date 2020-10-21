
// Часть 1. Блок 1. git add -AЗнакомство с vue

console.log("Привет");

// new- Создаем новый объект- экземпляр класса
// Класс Vue

// Передаем в конструктор класса Vue объект:
// el: -строка содержит css селектор того корневого элемента,
// которым нужно проинициализировать приложение

//new Vue({
// В переменной vue1 будет содержаться объект  Vue.
// Можно тогда будет к нему обратиться из другого объекта, например
var vue1= new Vue({ 

    el:'#app',
    data: {
     name: 'Vue.js',
     number: 100,
     isOK:true,
     string: 'My name is Vlad',
     url: 'http://google.com',
	  link: '<a href="http://yandex.ru">yandex</a>',
     counter:0,
     counter2:0,
     counter3:0,
     title:'Счетчик =',
      x: 0,
      y: 0,
      inputValue:"1 способ",
	  inputValue2:"2 способ",
	  isActive1:false,
	  isActive2:false,
	  color:"blue",
	  color2:"blue",
	  height:100,
	  isVisible:true,
	  type:'a',
	  isVisible2:true,
	  isVisible3:true,
	  isVisible4:true,
	  counter:0,
	 // condition: 'counter < 3',
	  counter2:0,
	  people: [ 'Vlad',
	            'Max',
                'Elena'  
	  ],
	  people2: [ 
	  {name:'Vlad',age:20},
	  {name:'Max',age:25},
	  {name:'Elena',age:30},
	  ],
	  person10: {
		 name:'Max',
         age: 40,
         job:'programmist'		 
	  },
	  title2:'Title',
	  
	  
    },
	computed: {
	     	getCssClases: function() {
			return {
	        'red':this.isActive1,
			'green':!this.isActive1			
			}
			                          },
			circleClases: function() {
			return {
			'background':this.color2,
			'height':this.height + 'px' 
			       }
			},
			computedResult: function() {
			console.log('computed result was called');
			return this.counter >=3 ? ' counter > = 3 ' : ' counter < 3 ';
		},
		alertFast2: function() {
			alert('Vue1');
			
		}
			
			
			
	},
	// смотреть, следить.
	// смотрим за свойствами которые есть в поле data
	watch: {
		// counter:  отслеживаем изменения.
		// при любом изменении counter- выполняем действия какие-то.
		// Функции любые- при изменении переменной тоже будут пересчитываться,
		// но тум именно определенные действия выполняем при изменении переменной.
		//	counter: function() {
		//	console.log('from watch object counter=',this.counter);
		// } 
		
		
		// val- на что изменилось значение переменной
		counter: function(val) {
			console.log('from watch object counter=',val);
		} 	
	},	
    methods: {
        changeName: function(event) {
            // Получаем доступ сразу к name, который в data
            // задаем ему значение- event- текущее событие,
            // связанное с #app, target- текущий объект, value-
            // введенный текст
			
		   // Те данные, которые вводим в input- автоматически отображаются
		   // В name (в html name отображается в h1: <h1> {{ name }}</h1>)

            this.name = event.target.value;
        },
		// Функция возвращает строку.		
		// Выводим результат работы функции в браузере:
		// <h1> method: {{ sayHello()}}</h1>  
		sayHello:function() {
			return 'function';			
		},
		// Функция riseCounter
		// Вызывается при щелчке на кнопку button
		// Увеличиваем переменную counter при этом на единицу,
		// которая затем отображается в браузере
		riseCounter: function() {
			// Увеличивать на 5 при каждом нажатии:
			// this.counfer +=5;
			this.counter++;
		},
		// Передаем в метод текущее событие event 
		// event.target- объект с которым случается событие
		onHover: function(event) {
			
			event.target.style.color="red";
		  	
		},
		
		onLeave: function(event) {
			
			event.target.style.color="black";
		  	
		},
		// Еще принимаем параметр event - событие
		riseCounter3: function(num,str,event) {
			// Функция принимает параметр num - на который нужно увеличить переменную counter;
			// title- принимает переданное значение str
			this.counter3+=num;
			this.title=str;
			
			// В зависимости от значения num изменим цвет кнопки
			
			if (num === 5 ) {
				
				event.target.style.color = "blue"; // Цвет синий
				
				
			} else if (num === 10) {
				
				event.target.style.color = "red"; // Цвет красный
				
				
			}                                   
		                                      },
		clickOnGoogle: function(event) {
			// Отменяем поведение объекта, с которым произошло событие, 
			// В данном случае это касается ссылки
			event.preventDefault();
			                    		},
		// В переменную x- передается координата курсора (при движении мышкой)
		// В переменную y- передается координата курсора (при движении мышкой)
       handleMouseMove: function (event) {
          this.x = event.clientX
          this.y = event.clientY
        },
		// вывод значение поля input при каждом новом вводе символа
		// С помощью сравнения if ограничим:
		// только если нажата клавиша Enter- выводим содержимое поля input
		// С помощью vue.js упростили - v-on:keyup.enter -  при нажатии клавиши enter.
		// Теперь тут можно не писать if
		//if (event.keyCode === 13) {
        alertValue: function (event) {
			alert(event.target.value)
		//} 		
		                          },
       // При изменении counter изменяем значение condition в зависимости от значения
	   // counter. По умолчанию condition =' counter < 3 ';
        add: function() {
			this.counter++;
		//	this.condition = this.counter >=3 ? ' counter > = 3 ' : ' counter < 3 ';
		},
        sub: function() {
			this.counter--;
		//	this.condition = this.counter >=3 ? ' counter > = 3 ' : ' counter < 3 ';
		},
		result: function() {
			console.log('result was called');
			return this.counter >=3 ? ' counter > = 3 ' : ' counter < 3 ';			
		},
		alertFast: function() {
			alert('Vue1');
			
		}
						  
		
		
   }


});

// Определили поле уже после инициализации объекта vue-
// оно не выведется на странице автоматически.
// Но если меняем во втором объекте vue его- измененное поле выведется
// после нажатия на кнопку, связанную с функцией из 2-го объекта
vue1.newField = 'Random text';


new Vue({
el:'#app2',
data: {
	title2: 'Vue2',
	title3: 'title',
	titile4: 'Vue'
	
},

methods: {
	updateFirstTitle: function() {
		
		// Изменяем данные из первого приложения
		vue1.title2="Updated from second upp";
		vue1.newField="new field";
		vue1.alertFast(); // Если функция определена в methods  1-го объекта
		//vue1.alertFast2; // если функция определена в computed первого объекта
		//  С задержкой вызываем
		//setTimeout(function(){
		//	vue1.alertFast()			
		//},1000		
		//)
		
		
	},
	updateTitle: function() {
		this.title3='new title';
		// this.$refs - объект, содержащий референции- описание для тегов, помеченных
        // в html ref="" 		
		//(например, {heading:'h2',horLine:'hr'})
		// h2- это полность тег h2 (node h2)
		console.log(this.$refs);
		console.log(this.$refs.heading);
		console.log(this.$refs.horLine);
		// Можно и так, но в этом случае не используем virtual Dom vue.js
		console.log(document.querySelector('#hr1'));
		this.$refs.heading.style.color= 'green';
		
		
		
	} 
	
	
	
	
}

});



// Заведем новый инстанс vue3. Поместим туда объект Vue. Удалим el
let vue3 = new Vue({
el:'#app3',
data: {

	title4: 'Объект Vue',
	title5: '***'
},
// Создаем шаблон по правилам html
// Тогда в html-файле теги которые напишем в <div id="app3"> </div> не будут работать.
// Их надо тут описывать. Надо все заключить в корневой <div> </div>
template: '<div> <h1> {{ title4}} </h1>  <p> Привет  </p></div>'
});

// Передаем  в объект vue css-селектор, с которым связывается наше объект (приложение) vue
// Если укажем поле el в объекте Vue- произойдет то же самое- вызовктся метод mount()
//vue3.$mount('#app3');

//new Vue()- инициализируем новое Vue-приложение.
new Vue({
el:'#app4',
data: {
	title6: 'Объект Vue'
},
methods:{
	doDestroy: function() {
// $- системный метод	
// this- это объект Vue. Применяем метод ко всему объекту Vue- удаляем его	
	this.$destroy()		
    }	
}, 

// После инициализации объекта Vue. Vue  готовится создать новое приложение.
beforeCreate: function() {
	console.log('Before create');
},
// После создания объекта Vue но до создания html-кода
created: function() {
	console.log('Created');
},
// Vue готово вставить скомпилированный шаблон в DOM-дерево, но пока еще не 
// вставилось
beforeMount: function() {
	console.log('Before Mount');
},
// html-дерево готово, вставленно в DOM
mounted: function() {
	console.log('Mounted');
},
// Методы вызываются когда что-то меняется в приложении (переменная, например)
// вызывается перед тем как что-то изменилось
beforeUpdate: function() {
	console.log('Before update');
},
// после завершения изменений. шаблон перерисован
updated: function() {
	console.log('updated');
},
// Методы отслеживают удаление/уничтожение элемента
beforeDestroy: function() {
	console.log('Before destroy');
},
// после завершения удаления
destroyed: function() {
	console.log('destroyed');
},
});


// Если let написать- у каждого компонента будет свой counter
var dataObj = {
	counter:0	
}

// функция component объекта Vue
// Регистрируем компонент до инициализации приложения
// 1 параметр- имя создаваемого тега для html который будем использовать в <div id="app5">
// Фактически с помощью vue.js создаем компаненты- новые теги 
// вставляемый в <div id="app5">
// Текст тега (обязательно):
// template: `текст в html-формате`
// затем через , можно использовать
// любые другие поля объекта vue
// data- переменные там хранятся
// в данном случае это должна быть функция , со словом return внутри


// Зарегистрировали компонент глобально.
// Можно использовать в разных <div id="">  с разными id

Vue.component('my-counter', {
	template:`
<div style="border:1px solid black; padding:10px ">
<h2>  counter: {{ counter}}     </h2>
<button @click="add"> Add to counter </button>
</div>	
	

`,
data: function(){
// Если используем объект с одной переменной глобальной- у компонентов всех она одна и таже
//return dataObj

// функция data позволяет замыкать переменную в компоненте- у каждого компонента свой counter
return {
counter:0
}  
},
methods: {
	add: function() {
		this.counter++;
	}
}

});


// Создаем объект чтобы локально зарегистрировать его
// как компонент объекта vue
// Лучше писать прямо в объекте vue- без var.
// С let тоже работает

var component1 = {
	template:`
<div style="border:1px solid black; padding:10px ">
<h2>  counter: {{ counter}}     </h2>
<button @click="add"> Add to counter </button>
</div>	
	

`,
data: function(){

return {
counter:0
}  
},
methods: {
	add: function() {
		this.counter++;
	}
}

}	
	
	
	

var component2 = {
	template:`
<div style="border:1px solid black; padding:10px ">
<h2>  counter: {{ counter}}     </h2>
<button @click="add"> Add to counter </button>
</div>	
	

`,
data: function(){

return {
counter:0
}  
},
methods: {
	add: function() {
		this.counter++;
	}
}

}	
		


/*
// нельзя использовать ; - это перечисление свойств	
data: {
counter:0,
counter2:0	
}*/
new Vue({
el:"#app5",
// опишем локальный компонент - можно будет использовать 
// только в div id="app5" 
// (можно component прямо тут описать)
components: {
	'my-counter1': component1
}


});	


// Этот объект отличается от прошлого id (el:"#app6")
new Vue({
el:"#app6",
components: {
	// Даем имя в стиле camel case (каждое новое слово с большой буквы)
	// Строка в имени не содержит дефисы- удаляем кавычки.
	myСounter2: component2
}

});	


