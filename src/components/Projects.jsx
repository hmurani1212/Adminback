import React from 'react'
function Projects() {
    return (
        <div
            name="about"
            id="about"
            className="w-full h-screen bg-[#0a192f] text-gray-300"
        >
            <h1 className="text-center text-2xl font-bold">Team Projects</h1>
            <div className="grid grid-cols-2 gap-2 md:ml-28 my-10">
                <div>
                    <a
                        href="#"
                        className="block max-w-sm p-6 bg-black text-white
                         border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                            E-Commerce Website
                        </h5>
                        <p className="font-normal text-white dark:text-gray-400">
                        <img class="rounded-full w-32 h-32 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXsW_XVJZkhoAXmWtDznTZgCMVMSEum9Vfw&usqp=CAU" alt="image description" />
                            Our Team has Create a e-commrce website.In which a user can buy product product.if any isssue in product can contect us. We also add a payment method in that
                        </p>
                    </a>

                </div>
                <div class="flex items-center justify-center">
                    <a
                        href="#"
                        className="block max-w-sm p-6 bg-black text-white
                         border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                            Admin pannel For satff Handling
                        </h5>
                        <p className="font-normal text-white dark:text-gray-400">
                        <img class="rounded-full w-32 h-32 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQElhmAKGuu5LbLrNMhleU9h6trNPsAui_i2Q&usqp=CAU" alt="image description" />
                            A Comapany Admin can handle position.He can check which his employee on which position.He also can chech add delete aUpdate and fix the position of Staff.
                        </p>
                    </a>

                </div>
                <div>
                    <a
                        href="#"
                        className="block max-w-sm p-6 bg-black text-white
                         border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                            Addentence Sheet
                        </h5>
                        <p className="font-normal text-white dark:text-gray-400">
                        <img class="rounded-full w-32 h-32 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCazbF5EY7njSWS6tymOYA6o3ItOOISiyKA&usqp=CAU" alt="image description" />
                            We have Craete a attendence Sheet in react js.In which Comaany employee can atendence his daily attendence and can check his daily attendence.Admin can check every Studence attendence and can delete update add delete attendence student attendence
                        </p>
                    </a>

                </div>
                <div class="flex items-center justify-center">
                    <a href="#" class="block max-w-sm p-6 bg-black text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                            Hospital Management System
                        </h5>
                        <p class="font-normal text-white dark:text-gray-400">
                            <img class="rounded-full w-32 h-32 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdY5yxpUjYfLAbxayve76CrEt-14m9R_Sb4g&usqp=CAU" alt="image description" />
                            We create a hospital management system. In which a patient can take an appointment. In which the doctor can check how many patients he can check, add patients, and check which patient is taking which medicine and how many medicines are remaining in our lab.
                        </p>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Projects