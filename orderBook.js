

        function reconcileOrder(existingBook, incomingOrder){
            let updatedBook = []

            if (existingBook.length === 0) {
                updatedBook = existingBook.concat(incomingOrder)
                return updatedBook
              }


              for(let i = 0; i < existingBook.length; i++){
                  const element = existingBook.shift()
                 if(element.type !== incomingOrder.type && element.price === incomingOrder.price) {
                    if (incomingOrder.quantity >= element.quantity){
                      incomingOrder.quantity = incomingOrder.quantity - element.quantity
                        
                    } else {
                      incomingOrder = {
                        type: element.type,
                        price: element.price,
                        quantity: element.quantity - incomingOrder.quantity,
                      }
                    }
                  } else {
                    updatedBook.push(element)
                    
                  }
              }
              if (existingBook.length > 0) {
                updatedBook = updatedBook.concat(existingBook)
              }
               if (incomingOrder.quantity < 0) {
                return updatedBook.push([incomingOrder])
              }
              
              if (incomingOrder.quantity > 0) {
                updatedBook.push(incomingOrder)
              }
             

              return updatedBook
        }

       
module.exports = reconcileOrder