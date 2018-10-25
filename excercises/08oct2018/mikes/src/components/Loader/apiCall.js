const allFlavors = (
    rapid.call('Strain', 'getListAllFlavors', { 
        'apiKey': 'c3WR8E0'
    
    }).on('success', function (payload) {
        console.log(payload)
    }).on('error', function (payload) {
         /*YOUR CODE GOES HERE*/ 
    })
)
    
const flavor = (
    rapid.call('Strain', 'getStrainsByFlavor', { 
        'apiKey': 'c3WR8E0',
        'flavor': 'Pine'
    
    }).on('success', function (payload) {
        console.log(payload)
    }).on('error', function (payload) {
         /*YOUR CODE GOES HERE*/ 
    })
)
const prosCons =(
    rapid.call('Strain', 'getEffectsByStrainId', { 
        'strainId': '2100',
        'apiKey': 'c3WR8E0'
    
    }).on('success', function (payload) {
        console.log(payload)
    }).on('error', function (payload) {
         /*YOUR CODE GOES HERE*/ 
    })
)