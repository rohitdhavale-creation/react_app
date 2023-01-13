import React from 'react';
import About from './About';
const data=[{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCNdquE8G5w-Cxy1G5Zh770LMwNlnvfNMxw&usqp=CAU",
    name:"Rohit",
    gender:"Male",
    age:"23",
    marks:"100",
    address:"Pune"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Vishal",
    gender:"Male",
    age:"23",
    marks:"88",
    address:"Ahmednagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RKQ2EGKbweio2pvdPGoT19lDWPcPKVBT8zdG0P_Q7O_TKgnD5KwSOffTUkyWDLOBafU&usqp=CAU",
    name:"Akash",
    gender:"Male",
    age:"23",
    marks:"60",
    address:"Akole"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9k7og7sbXSDATh7V8BmzOCLzR8lLFIAEO05vuN4d7Sqt-BuC24u0i3_jzUA14ryLeQk&usqp=CAU",
    name:"Vaibhav",
    gender:"Male",
    age:"23",
    marks:"66",
    address:"Nasik"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRcuIYdI_7UPoEFx21YAAlyCEXqCCJfYMGmGKNk-1c8FGWpHhZqstM82tNpZmYUo47g8&usqp=CAU",
    name:"Ashu",
    gender:"Male",
    age:"23",
    marks:"101",
    address:"Pune"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9k7og7sbXSDATh7V8BmzOCLzR8lLFIAEO05vuN4d7Sqt-BuC24u0i3_jzUA14ryLeQk&usqp=CAU",
    name:"Parag",
    gender:"Male",
    age:"23",
    marks:"90",
    address:"Ahmednagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4BF0kPm_g_FmWnLy7NTIpXgWZaN5zUSjec3kcSgkDYWAmw8x_rmSsBbHjDQCYn2e4c4&usqp=CAU",
    name:"Ram",
    gender:"Male",
    age:"23",
    marks:"55",
    address:"Loni"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Sham",
    gender:"Male",
    age:"23",
    marks:"200",
    address:"Mumbai"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-i82kdgVUg0fTJU07_ir8LnOGUuAvF4QzLFZFK3A6-Gso322zo5VMo6FVDIR3SiIihg&usqp=CAU",
    name:"Devil",
    gender:"Male",
    age:"23",
    marks:"55",
    address:"Rahata"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Sidhu",
    gender:"Male",
    age:"23",
    marks:"200",
    address:"Nassik"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRPr_Bv_F0WRl_cYcB53okcMRY15W92j3zrTNOnU1s0JcdjTIhidxsWpJSpQj_dQG-_o&usqp=CAU",
    name:"Ajay",
    gender:"Male",
    age:"23",
    marks:"500",
    address:"Nagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCNdquE8G5w-Cxy1G5Zh770LMwNlnvfNMxw&usqp=CAU",
    name:"Rohit",
    gender:"Male",
    age:"23",
    marks:"100",
    address:"Pune"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Vishal",
    gender:"Male",
    age:"23",
    marks:"88",
    address:"Ahmednagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RKQ2EGKbweio2pvdPGoT19lDWPcPKVBT8zdG0P_Q7O_TKgnD5KwSOffTUkyWDLOBafU&usqp=CAU",
    name:"Akash",
    gender:"Male",
    age:"23",
    marks:"60",
    address:"Akole"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9k7og7sbXSDATh7V8BmzOCLzR8lLFIAEO05vuN4d7Sqt-BuC24u0i3_jzUA14ryLeQk&usqp=CAU",
    name:"Vaibhav",
    gender:"Male",
    age:"23",
    marks:"66",
    address:"Nasik"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRcuIYdI_7UPoEFx21YAAlyCEXqCCJfYMGmGKNk-1c8FGWpHhZqstM82tNpZmYUo47g8&usqp=CAU",
    name:"Ashu",
    gender:"Male",
    age:"23",
    marks:"101",
    address:"Pune"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9k7og7sbXSDATh7V8BmzOCLzR8lLFIAEO05vuN4d7Sqt-BuC24u0i3_jzUA14ryLeQk&usqp=CAU",
    name:"Parag",
    gender:"Male",
    age:"23",
    marks:"90",
    address:"Ahmednagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4BF0kPm_g_FmWnLy7NTIpXgWZaN5zUSjec3kcSgkDYWAmw8x_rmSsBbHjDQCYn2e4c4&usqp=CAU",
    name:"Ram",
    gender:"Male",
    age:"23",
    marks:"55",
    address:"Loni"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Sham",
    gender:"Male",
    age:"23",
    marks:"200",
    address:"Mumbai"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-i82kdgVUg0fTJU07_ir8LnOGUuAvF4QzLFZFK3A6-Gso322zo5VMo6FVDIR3SiIihg&usqp=CAU",
    name:"Devil",
    gender:"Male",
    age:"23",
    marks:"55",
    address:"Rahata"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Sidhu",
    gender:"Male",
    age:"23",
    marks:"200",
    address:"Nassik"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRPr_Bv_F0WRl_cYcB53okcMRY15W92j3zrTNOnU1s0JcdjTIhidxsWpJSpQj_dQG-_o&usqp=CAU",
    name:"Ajay",
    gender:"Male",
    age:"23",
    marks:"500",
    address:"Nagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCNdquE8G5w-Cxy1G5Zh770LMwNlnvfNMxw&usqp=CAU",
    name:"Rohit",
    gender:"Male",
    age:"23",
    marks:"100",
    address:"Pune"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Vishal",
    gender:"Male",
    age:"23",
    marks:"88",
    address:"Ahmednagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RKQ2EGKbweio2pvdPGoT19lDWPcPKVBT8zdG0P_Q7O_TKgnD5KwSOffTUkyWDLOBafU&usqp=CAU",
    name:"Akash",
    gender:"Male",
    age:"23",
    marks:"60",
    address:"Akole"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9k7og7sbXSDATh7V8BmzOCLzR8lLFIAEO05vuN4d7Sqt-BuC24u0i3_jzUA14ryLeQk&usqp=CAU",
    name:"Vaibhav",
    gender:"Male",
    age:"23",
    marks:"66",
    address:"Nasik"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRcuIYdI_7UPoEFx21YAAlyCEXqCCJfYMGmGKNk-1c8FGWpHhZqstM82tNpZmYUo47g8&usqp=CAU",
    name:"Ashu",
    gender:"Male",
    age:"23",
    marks:"101",
    address:"Pune"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9k7og7sbXSDATh7V8BmzOCLzR8lLFIAEO05vuN4d7Sqt-BuC24u0i3_jzUA14ryLeQk&usqp=CAU",
    name:"Parag",
    gender:"Male",
    age:"23",
    marks:"90",
    address:"Ahmednagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4BF0kPm_g_FmWnLy7NTIpXgWZaN5zUSjec3kcSgkDYWAmw8x_rmSsBbHjDQCYn2e4c4&usqp=CAU",
    name:"Ram",
    gender:"Male",
    age:"23",
    marks:"55",
    address:"Loni"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Sham",
    gender:"Male",
    age:"23",
    marks:"200",
    address:"Mumbai"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-i82kdgVUg0fTJU07_ir8LnOGUuAvF4QzLFZFK3A6-Gso322zo5VMo6FVDIR3SiIihg&usqp=CAU",
    name:"Devil",
    gender:"Male",
    age:"23",
    marks:"55",
    address:"Rahata"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Sidhu",
    gender:"Male",
    age:"23",
    marks:"200",
    address:"Nassik"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRPr_Bv_F0WRl_cYcB53okcMRY15W92j3zrTNOnU1s0JcdjTIhidxsWpJSpQj_dQG-_o&usqp=CAU",
    name:"Ajay",
    gender:"Male",
    age:"23",
    marks:"500",
    address:"Nagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCNdquE8G5w-Cxy1G5Zh770LMwNlnvfNMxw&usqp=CAU",
    name:"Rohit",
    gender:"Male",
    age:"23",
    marks:"100",
    address:"Pune"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Vishal",
    gender:"Male",
    age:"23",
    marks:"88",
    address:"Ahmednagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RKQ2EGKbweio2pvdPGoT19lDWPcPKVBT8zdG0P_Q7O_TKgnD5KwSOffTUkyWDLOBafU&usqp=CAU",
    name:"Akash",
    gender:"Male",
    age:"23",
    marks:"60",
    address:"Akole"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9k7og7sbXSDATh7V8BmzOCLzR8lLFIAEO05vuN4d7Sqt-BuC24u0i3_jzUA14ryLeQk&usqp=CAU",
    name:"Vaibhav",
    gender:"Male",
    age:"23",
    marks:"66",
    address:"Nasik"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRcuIYdI_7UPoEFx21YAAlyCEXqCCJfYMGmGKNk-1c8FGWpHhZqstM82tNpZmYUo47g8&usqp=CAU",
    name:"Ashu",
    gender:"Male",
    age:"23",
    marks:"101",
    address:"Pune"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9k7og7sbXSDATh7V8BmzOCLzR8lLFIAEO05vuN4d7Sqt-BuC24u0i3_jzUA14ryLeQk&usqp=CAU",
    name:"Parag",
    gender:"Male",
    age:"23",
    marks:"90",
    address:"Ahmednagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4BF0kPm_g_FmWnLy7NTIpXgWZaN5zUSjec3kcSgkDYWAmw8x_rmSsBbHjDQCYn2e4c4&usqp=CAU",
    name:"Ram",
    gender:"Male",
    age:"23",
    marks:"55",
    address:"Loni"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Sham",
    gender:"Male",
    age:"23",
    marks:"200",
    address:"Mumbai"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-i82kdgVUg0fTJU07_ir8LnOGUuAvF4QzLFZFK3A6-Gso322zo5VMo6FVDIR3SiIihg&usqp=CAU",
    name:"Devil",
    gender:"Male",
    age:"23",
    marks:"55",
    address:"Rahata"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Sidhu",
    gender:"Male",
    age:"23",
    marks:"200",
    address:"Nassik"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRPr_Bv_F0WRl_cYcB53okcMRY15W92j3zrTNOnU1s0JcdjTIhidxsWpJSpQj_dQG-_o&usqp=CAU",
    name:"Ajay",
    gender:"Male",
    age:"23",
    marks:"500",
    address:"Nagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDCNdquE8G5w-Cxy1G5Zh770LMwNlnvfNMxw&usqp=CAU",
    name:"Rohit",
    gender:"Male",
    age:"23",
    marks:"100",
    address:"Pune"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Vishal",
    gender:"Male",
    age:"23",
    marks:"88",
    address:"Ahmednagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RKQ2EGKbweio2pvdPGoT19lDWPcPKVBT8zdG0P_Q7O_TKgnD5KwSOffTUkyWDLOBafU&usqp=CAU",
    name:"Akash",
    gender:"Male",
    age:"23",
    marks:"60",
    address:"Akole"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9k7og7sbXSDATh7V8BmzOCLzR8lLFIAEO05vuN4d7Sqt-BuC24u0i3_jzUA14ryLeQk&usqp=CAU",
    name:"Vaibhav",
    gender:"Male",
    age:"23",
    marks:"66",
    address:"Nasik"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRcuIYdI_7UPoEFx21YAAlyCEXqCCJfYMGmGKNk-1c8FGWpHhZqstM82tNpZmYUo47g8&usqp=CAU",
    name:"Ashu",
    gender:"Male",
    age:"23",
    marks:"101",
    address:"Pune"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9k7og7sbXSDATh7V8BmzOCLzR8lLFIAEO05vuN4d7Sqt-BuC24u0i3_jzUA14ryLeQk&usqp=CAU",
    name:"Parag",
    gender:"Male",
    age:"23",
    marks:"90",
    address:"Ahmednagar"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4BF0kPm_g_FmWnLy7NTIpXgWZaN5zUSjec3kcSgkDYWAmw8x_rmSsBbHjDQCYn2e4c4&usqp=CAU",
    name:"Ram",
    gender:"Male",
    age:"23",
    marks:"55",
    address:"Loni"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Sham",
    gender:"Male",
    age:"23",
    marks:"200",
    address:"Mumbai"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-i82kdgVUg0fTJU07_ir8LnOGUuAvF4QzLFZFK3A6-Gso322zo5VMo6FVDIR3SiIihg&usqp=CAU",
    name:"Devil",
    gender:"Male",
    age:"23",
    marks:"55",
    address:"Rahata"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16_0JBH6JcrYnyshAp8Jh5dM5A5Iq4WWzT2_cUDzsU7rQqRrNv9up8QOMV83h92vy8VI&usqp=CAU",
    name:"Sidhu",
    gender:"Male",
    age:"23",
    marks:"200",
    address:"Nassik"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRPr_Bv_F0WRl_cYcB53okcMRY15W92j3zrTNOnU1s0JcdjTIhidxsWpJSpQj_dQG-_o&usqp=CAU",
    name:"Ajay",
    gender:"Male",
    age:"23",
    marks:"500",
    address:"Nagar"
},
]


const Student = () => {
    return (
        <>
            {
                data.map(val=>{
                    return(
                        <>
                        <About img={val.img} name={val.name} gender={val.gender}  age={val.age} marks={val.marks} address={val.address}></About>
                        </>
                    )
                })
            }
        </>
    );
}

export default Student;