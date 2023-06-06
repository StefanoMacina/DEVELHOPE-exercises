import {log} from 'node:console'


function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

//   const getResult = async () => {
//     try {
//         const data1 = await luckyDraw('Tina')
//         const data2 = await luckyDraw('Jorge')
//         const data3 = await luckyDraw('Julien')
//         log(data1, data2, data3)
//     } catch (error) {
//         if(error instanceof Object){
//             throw new Error('instance of object')
//         }
//     }
//   }
//   getResult()

const getResult = async ( ) => {
    try {
        const data = await Promise.all([
            luckyDraw('Tina'),
            luckyDraw('Jorge'),
            luckyDraw('Julien')
        ])
        
        data.forEach((el) => {
            log(el.toUpperCase())
        })
        
    } catch (error) {
        log(error.name)
    }
}

getResult()