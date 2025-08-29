const sumNumber = 1;
const queryBtn = document.querySelectorAll('.heart-btn');

let count = 0;
const countDisply = document.getElementById("counter");
const hearts = document.getElementsByClassName("heart-counter");

for (let heart of hearts) {
    heart.addEventListener("click", function () {
        count++;
        countDisply.innerText = count;
    });
}


function copyAlert(id, alert) {
    if (confirm(alert)) {
        const he = document.getElementById(id).innerText;
        navigator.clipboard.writeText(he)

    }

}

document.getElementById('emergencyNumber')
    .addEventListener('click', function () {
        copyAlert('titleNum', 'Number copied:999')

    });

document.getElementById('policeHepline')
    .addEventListener('click', function () {
        copyAlert('titleNum', 'Number copied:999')

    });
document.getElementById('fireServie')
    .addEventListener('click', function () {
        copyAlert('titleNum', 'Number copied:999')

    });
document.getElementById('ambulanceService')
    .addEventListener('click', function () {
        copyAlert('ambulanceNum', 'Number copied:1994-999999')

    });

document.getElementById('womenChild')
    .addEventListener('click', function () {
        copyAlert('womenNum', 'Number copied:109')

    });
document.getElementById('antiHelp')
    .addEventListener('click', function () {
        copyAlert('antiNum', 'Number copied:106')

    });
document.getElementById('electricityHelp')
    .addEventListener('click', function () {
        copyAlert('electricityNum', 'Number copied:16216')

    });
document.getElementById('bracHelping')
    .addEventListener('click', function () {
        copyAlert('bracNum', 'Number copied:16445')

    });
document.getElementById('railwayBD')
    .addEventListener('click', function () {
        copyAlert('railwayNum', 'Number copied:163')

    });



const copyQueryBtn = document.querySelectorAll('.copyQuery');
for (const totalCopyQuery of copyQueryBtn) {
    totalCopyQuery.addEventListener('click', function () {
        const copyHeard = document.getElementById('copy-count').innerText;
        const parseCopy = parseInt(copyHeard);
        const sumCopy = parseCopy + sumNumber;
        document.getElementById('copy-count').innerText = sumCopy;
    })
}




function collConfirm(id, name, sNum, confirmText) {
    document.getElementById(id)
        .addEventListener('click', function () {
            const coin = parseInt(document.getElementById('coin-counter').innerText);

            if (coin < 20) {
                alert("Insufficient balance. Minimum 20 coins required ")
                return
            }
            else if (confirm(confirmText)) {


                const min = coin - minusCount;
                document.getElementById('coin-counter').innerText = min;
            }

            const calldata = {
                service: name,
                serviceNum: sNum,
                date: new Date().toLocaleTimeString()

            }
            collDataFile.push(calldata)


            const historyContainer = document.getElementById('history-continer')

            const div = document.createElement('div');

            for (const collData of collDataFile) {
                div.innerHTML = `
                        <div class="bg-gray-200 p-5 rounded-md flex justify-between  items-center mb-3">
                    <div>
                        <h1 class="text-[23px] font-semibold">${collData.service}</h1>
                        <p>${collData.serviceNum}</p>
                    </div>
                    <p>${collData.date}</p>
                </div>
                `
            }
            historyContainer.appendChild(div);

        })


}


const collDataFile = [];

const minusCount = 20;


const erName = document.getElementById('emergencyName').innerText;
const enNum = document.getElementById('titleNum').innerText;
collConfirm('emergencyCall', erName, enNum, 'Calling National Emergencty:999')


const policeName = document.getElementById('pliceName').innerText;
const policeNum = document.getElementById('titleNum').innerText;
collConfirm('policeCall', policeName, policeNum, 'Calling Police Helpline Number:999')

const fireSerName = document.getElementById('fireName').innerText;
const fireNum = document.getElementById('titleNum').innerText;
collConfirm('fireCallBtn', fireSerName, fireNum, 'Calling Fire Service Number:999')

const ambulanceNam = document.getElementById('ambulanceName').innerText;
const ambulanceNumber = document.getElementById('ambulanceNum').innerText;
collConfirm('ambulanceCallBtn', ambulanceNam, ambulanceNumber, 'Calling Ambulance Service Number:1994-999999')

const womenNam = document.getElementById('womenName').innerText;
const womenNumber = document.getElementById('womenNum').innerText;
collConfirm('womenCall', womenNam, womenNumber, 'Calling Women & Child Helpline Number:109')

const antiName = document.getElementById('antiNam').innerText;
collConfirm('antiCallBtn', antiName, 106, 'Calling Anti-Corruption Helpline Number:106')

const electricityName = document.getElementById('electricity').innerText;
collConfirm('electricitybtn', electricityName, 16216, 'Calling Electricity Helpline Number:116216')

const bracName = document.getElementById('bracNam').innerText;
collConfirm('bracCallBtn', bracName, 16445, 'Calling Brac Helpline Number:16445')

const railwayName = document.getElementById('railwayNum').innerText;
collConfirm('railwayCallBtn', railwayName, 163, 'Calling Bangladesh Railway Helpline Number:163')




document.getElementById('clearBtn')
    .addEventListener('click', function () {
        document.getElementById('history-continer').innerText = ''
            ;
    })
