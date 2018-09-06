var now = new Date();
var hours = now.getHours();
var morning = '#b5d1ff';
var night = '#757c87';
var day = '#bfd7ff';
var day2 = '#eff5ff';
var timeout = 0;
setInterval(function bacground_swap() {
    if (hours > 20) {
        document.body.innerHTML = `
        <style>
        
        body{
            display: flex;
            align-items: center;
            justify-content: center;
            heigth: 90vh;
            background: ${night};
        }
        
        </style>


        <h1>Now Time : ${now.getHours()} : ${now.getMinutes()} </h1>
        `;
        timeout = 60000;
    } else if (hours > 12) {
        document.body.innerHTML = `
            <style>
            
            body{
                heigth: 90vh;
                background: ${day2};
            }
            
            </style>
            `;
        timeout = 60000;

    } else if (hours < 8) {
        document.body.innerHTML = `
            <style>
            
            body{
                heigth: 90vh;
                background: ${day};
            }
            
            </style>
            `;
        timeout = 60000;

    } else if (hours > 4) {
        document.body.outerHTML = `
            <style>
            
            body{
                heigth: 90vh;
                background: ${morning};
            }
            
            </style>
            `;
        timeout = 60000;
    }
}, 60000);