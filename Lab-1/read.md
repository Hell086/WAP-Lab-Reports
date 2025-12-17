LAB 1 
TITLE: HTML CSS BASICS

OBJECTIVES: 
1. To design Semantic HTML5 Structure 
2. To know the difference between Grid and Flexbox 
3. To implement Media Query  
4. To implement Bootstrap 
5. To build a Portfolio Frontend Template

THEORY:
SEMANTIC HTML5:
	Semantic HTML5 uses meaningful tags such as <header>, <nav> and <article> rather than generic <div> elements. These tags clearly describe the purpose of each section of a webpage for example , <header> defines the top section, whie <article> represents the main content making the structure easier for browsers and developers to understand.
Importance / Significance / Purpose:
Improves readability and maintainability of code
Helps search engines understand page content(SEO)
Enhances accessibility for screen readers
Makes webpage structure clear and organized

Source Code:
Metadata: Metadata provides information about the webpage and is written inside the  <head> tag
Semantic Tag:
 <header> – Represents the top section or header of a webpage
 <nav> – Contains navigation links
 <section> – Groups related content together
 <aside> – Contains side content related to main content
 <article> – Represents independent content like blogs or news
 <footer> – Represents the bottom section of a webpage
 <main> – Contains the main content of the webpage.

Fig: Semantic  HTML
GRID VS FLEXBOX :
Grid:
Grid is used when designing two-dimensional layouts (rows and columns), such as entire page layouts
Syntax:
      .container {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
}
Flexbox:
Flexbox is used for one-dimensional layouts (row or column), such as aligning items inside a container.
Syntax:
        .container{
                 display:flex;
                 justify-content: center;
                 align-items: center;
                 }

     Fig: Grid vs flexbox

Differences:
                 Grid
                Flexbox
Two -dimensional layout
One-dimensional layout
Control rows and columns
Controls row or column
Best for page layout
Best for small components
More complex structure
Simple and flexible


MEDIA QUERY:
Media queries allow websites to adapt their design for phones, tablets, laptops, and desktops by automatically applying different CSS styles. They work by checking conditions such as screen width or height before loading specific styles. The main purpose is to keep a single website flexible across all devices, improving user experience by adjusting layouts, text sizes, and colors when needed.
Responsive UI:
Responsive UI means a website adjusts itself to look clean and usable on any screen size. Media queries help achieve this by arranging elements in a vertical layout on smaller screens and distributing them more widely on larger displays.




Syntax:
          @media (max-width: 768px) {
 body{
 background-color: lightgray;
              }
}

BOOTSTRAP IMPLEMENTATION:
Bootstrap is a popular front-end framework used to design responsive and mobile-first websites easily. It provides pre-designed CSS and JavaScript components that help developers create attractive user interfaces more quickly.
Bootstrap is important because it ensures consistent design, supports responsive layouts, and reduces the need for extensive custom CSS.

Links of Bootstrap:
CSS link:
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

JS link:
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>


Component Used:
Card:
The card displays content in a boxed format with headers, images, text, and buttons perfect for blogs, products, or profiles.
Code of card:
<div class="card" style="width: 18rem;">
                <img src="viber_image_2025-12-07_18-11-49-401.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fw-bold">Elden Ring</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

Fig: Card Component
SOURCE CODE FOR FLEXBOX:
HTML file:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel = stylesheet href="grid.css">
</head>
<body>
    <header>
        <h1>Header</h1>
    </header>
    <main>
        <section>
           <h1>section</h1>
        </section>
        <aside>
            <h1>aside</h1>
        </aside>
        <section class="section_project">
            <h1>projects</h1>
        </section>
    </main>
</body>
<footer>
    <h1>footer</h1>
</footer>
</html>

CSS file:
body {
    display: flex;
    flex-direction: column;
    background-color: grey;
    gap: 1rem;
}
header, nav, section, aside, footer, article {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 10px;
}
main {
    display: flex;
    flex-direction: column;
    min-height: 70vh;  
    width: 100%;
    gap: 1rem;
}
main section,
main aside, main article {
    height: 250px; 
}
main div {
    display: flex;
    width: 100%;
    gap: 1rem;
}
main section ,main aside{
    flex: 1;  
}
footer {
    margin-top: auto;
}


SOURCE CODE FOR GRID:
HTML file:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel = stylesheet href="grid.css">
</head>
<body>
    <header>
        <h1>Header</h1>
    </header>
    <main>
        <section>
           <h1>section</h1>
        </section>
        <aside>
            <h1>aside</h1>
        </aside>
        <section class="section_project">
            <h1>projects</h1>
        </section>
    </main>
</body>
<footer>
    <h1>footer</h1>
</footer>
</html>

CSS file:
body{
    display: grid;
    min-height: 100vh; 
    grid-template-columns: auto auto ;
    background-color: grey;
    gap: 1rem;
    grid-template-areas: 
    "header header"
    "section aside"
    "projects projects"
    "footer footer";
}
header, section, aside, footer{
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
header{
    grid-area : header;
}


section{
    grid-area: section;
}
aside{
    grid-area: aside;
}
footer{
    grid-area: footer;
}
main{
    display: contents;
}
.section_project{
    grid-area: projects;
}
main section, main aside{
    min-height: 70vh;
}
footer{
    margin-top: auto;
}
@media(max-width: 700px){
    body{
        grid-template-columns: auto; 
        grid-template-areas: 
        "header"
        "section"
        "aside"
        "projects"
        "footer";
    }
}


SOURCE CODE FOR BOOTSTRAP:
HTML file:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script> <!—can be kept here also or at the end before the body tag -- >
    <link rel = stylesheet href="bootstrap.css">
</head>
<body>
    <header>
        <h1>Header</h1>
    </header>
    <main>
        <section>
           <h1>section</h1>
        </section>
        <aside>
            <h1>aside</h1>
        </aside>
        <section class="section_project", style="flex-direction: column;">
            <h1>projects</h1>
            <div style="display: flex; gap: 1rem;">
                <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
                <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        </section>
    </main>
</body>
<footer>
    <h1>footer</h1>
</footer>
</html>

CSS file:
body{
    display: grid;
    min-height: 100vh; 
    grid-template-columns: auto auto ;
    background-color: grey;
    gap: 1rem;
    grid-template-areas: 
    "header header"
    "section aside"
    "projects projects"
    "footer footer";
}


header, section, aside, footer{
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
header{
    grid-area : header;
}
section{
    grid-area: section;
}
aside{
    grid-area: aside;
}
footer{
    grid-area: footer;
}
main{
    display: contents;
}
.section_project{
    grid-area: projects;
}
main section, main aside{
    min-height: 70vh;
}
footer{
    margin-top: auto;
}
@media(max-width: 700px){
    body{
        grid-template-columns: auto; 
        grid-template-areas: 
        "header"
        "section"
        "aside"
        "projects"
        "footer";
    }
} 

RESULT  AND CONCLUSION:
From this lab work, we learned how modern web pages are designed using Semantic HTML5, CSS Grid and Flexbox, Media Queries, and Bootstrap. Semantic HTML5 helped us understand how to properly structure a webpage using meaningful tags instead of plain <div> elements. CSS Grid and Flexbox made page layout design easier and more flexible. Media queries allowed the webpage to adjust automatically for different screen sizes, making it responsive. Bootstrap helped us quickly design a clean and responsive interface using ready-made components like cards.
In conclusion, the use of Semantic HTML5, responsive layout techniques, and Bootstrap is very important in modern web development. These technologies make websites well-structured, responsive, user-friendly, and easy to maintain. By using semantic tags, grid/flex layouts, media queries, and Bootstrap components, developers can create professional and responsive websites efficiently. 


