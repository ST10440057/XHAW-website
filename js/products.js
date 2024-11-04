function enrollNow() {
    // Get the current course details
    const courseData = {
        title: document.getElementById("Title").textContent,
        price: document.getElementById("Price").textContent,
        duration: document.getElementById("Duration").textContent
    };

    // Get existing courses from localStorage or initialize empty array
    let selectedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];
    
    // Add new course to array
    selectedCourses.push(courseData);
    
    // Save back to localStorage
    localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
    
    // Redirect to quote page
    window.location.href = 'Quote.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    console.log("Query String:", queryString);

    

    switch(queryString) {
        case "?id=c1":
            document.getElementById("Title").textContent = "First Aid";
            document.getElementById("Description").textContent = "This training focuses on providing essential First Aid skills, including managing wounds and controlling bleeding, treating burns and fractures, and effectively responding to emergencies. It covers Emergency Scene Management, ensuring that individuals can assess and handle an emergency situation safely and efficiently. Participants will also learn how to perform Cardio-Pulmonary Resuscitation (CPR) to assist someone in cardiac arrest, as well as techniques for relieving respiratory distress, such as responding to choking or clearing a blocked airway. These vital skills prepare individuals to provide immediate care in critical moments before professional medical help arrives. ";
            document.getElementById("Price").textContent = "R1500";
            document.getElementById("Duration").textContent = "6 months";
            document.getElementById("li1").textContent = "Daycare staff";
            document.getElementById("li2").textContent = "Flight attendants";
            document.getElementById("li3").textContent = "Construction jobs";
            document.getElementById("li4").textContent = "Teachers";

            break;

        case "?id=c2":
            document.getElementById("Title").textContent = "Sewing";
            document.getElementById("Description").textContent = "This training covers a variety of essential sewing skills, including learning different types of stitches and how to properly thread a sewing machine. Participants will also gain practical experience in sewing buttons, zippers, hems, and seams, as well as making garment alterations to achieve the perfect fit. Additionally, the course will explore the process of designing and sewing new garments, providing the foundation for creating both simple adjustments and fully customized clothing items. ";
            document.getElementById("Price").textContent = "R1500";
            document.getElementById("Duration").textContent = "6 months";
            document.getElementById("li1").textContent = "Apparel Manufacturing ";
            document.getElementById("li2").textContent = "Textile production ";
            document.getElementById("li3").textContent = "Textile design";
            document.getElementById("li4").textContent = "Textile research ";

            break;

        case "?id=c3":
            document.getElementById("Title").textContent = "Landscaping";
            document.getElementById("Description").textContent = "This landscaping service emphasizes the thoughtful integration of indigenous and exotic plants and trees to enhance the beauty and diversity of outdoor spaces. We focus on the incorporation of fixed structures, such as fountains, statues, benches, tables, and built-in braais, to create functional and visually appealing environments. Our approach includes balancing various plants and trees within the garden to achieve harmony and aesthetics, considering the unique shapes and colors of each plant. Additionally, careful planning of the garden layout ensures optimal use of space and enhances the overall design, creating a serene and inviting atmosphere for clients to enjoy.";
            document.getElementById("Price").textContent = "R1500";
            document.getElementById("Duration").textContent = "6 months";
            document.getElementById("li1").textContent = "Groundskeeper  ";
            document.getElementById("li2").textContent = "Gardener ";
            document.getElementById("li3").textContent = "Landscape architect";
            document.getElementById("li4").textContent = "Greenhouse worker ";
  
            break;

        case "?id=c4":
            document.getElementById("Title").textContent = "Life Skills";
            document.getElementById("Description").textContent = "This program focuses on providing individuals with essential life skills, including how to open and manage a bank account, understand basic labor laws to be aware of their rights in the workplace, and develop fundamental literacy in reading, writing, and numeracy. By gaining these foundational skills, individuals are better equipped to navigate financial, legal, and everyday challenges, empowering them to improve their personal and professional lives. ";
            document.getElementById("Price").textContent = "R1500";
            document.getElementById("Duration").textContent = "6 months";
            document.getElementById("li1").textContent = "Career Advisor or Counselor";
            document.getElementById("li2").textContent = "Nonprofit or NGO Worker ";
            document.getElementById("li3").textContent = "Human Resources Assistant";
            document.getElementById("li4").textContent = "Community or Social Worker ";

            break;

        case "?id=c5":
            document.getElementById("Title").textContent = "Child minding";
            document.getElementById("Description").textContent = "Caring for children from birth to toddlerhood requires understanding their changing developmental needs. Babies from birth to six months need physical care, regular feeding, diaper changes, sleep, and emotional bonding through gentle interaction. From seven months to one year, they begin exploring and need safe spaces, sensory stimulation, and nutritious foods as they transition to solids. Toddlers need structure, language guidance, and physical activity to build coordination. Educational toys like rattles, soft books, and shape sorters for babies, and puzzles and stacking toys for toddlers, support cognitive and motor skill development.  ";
            document.getElementById("Price").textContent = "R750";
            document.getElementById("Duration").textContent = "6 Weeks";
            document.getElementById("li1").textContent = "Youth counselor ";
            document.getElementById("li2").textContent = "Children’s museum curator ";
            document.getElementById("li3").textContent = "Camp director ";
            document.getElementById("li4").textContent = "Day care assistant ";
            break;

        case "?id=c6":
            document.getElementById("Title").textContent = "Cooking";
            document.getElementById("Description").textContent = "The main idea is that maintaining a healthy body requires a balanced diet that includes proper portions of proteins, carbohydrates, and vegetables. Effective meal planning and proper cooking techniques are key to ensuring meals are nutritious and beneficial for overall health. ";
            document.getElementById("Price").textContent = "R750";
            document.getElementById("Duration").textContent = "6 weeks";
            document.getElementById("li1").textContent = "Dietitian ";
            document.getElementById("li2").textContent = "Caterer ";
            document.getElementById("li3").textContent = "Chef ";
            document.getElementById("li4").textContent = "Health coach ";

            break;

        case "?id=c7":
            document.getElementById("Title").textContent = "Garden maintenance";
            document.getElementById("Description").textContent = "This course will focus on managing garden care under water restrictions, with a specific emphasis on the watering requirements of both indigenous and exotic plants. Participants will learn how to efficiently water plants while conserving resources, taking into account the unique needs of different species and adapting to local climate conditions. The course will also cover essential pruning techniques to promote plant health and prevent disease, along with methods of plant propagation to encourage new growth. Additionally, participants will gain practical knowledge of planting techniques tailored to various plant types, ensuring proper establishment and long-term success in different soil conditions and environments. By the end, individuals will be equipped to maintain a thriving garden, even under challenging conditions such as water restrictions. ";
            document.getElementById("Price").textContent = "R750";
            document.getElementById("Duration").textContent = "6 Weeks";
            document.getElementById("li1").textContent = "Plant videographer";
            document.getElementById("li2").textContent = "Gardener ";
            document.getElementById("li3").textContent = "Landscape designer ";
            document.getElementById("li4").textContent = "Groundskeeper";
           
            break;

        default:
            document.getElementById("Title").textContent = "Course not found";
            document.getElementById("Description").textContent = "";
            document.getElementById("Price").textContent = "";
            document.getElementById("Duration").textContent = "";
            document.getElementById("li1").textContent = "";
            document.getElementById("li2").textContent = "";
            document.getElementById("li3").textContent = "";
            document.getElementById("li4").textContent = "";

            break;
    }
});


