function IceCreamFactory() {

    var total = 0;

    function Flavours(ice) {
        if (ice === "Strawberry") {
            total += 15
        }
        if (ice === "Chocolate") {
            total += 17
        }
        if (ice === "Vanilla") {
            total += 10
        }
        if (ice === "Oreo") {
            total += 25
        }
        if (ice === "Mint") {
            total += 20
        }
        if (ice === "English Toffee") {
            total += 30
        }
        if (ice === "Tin Roof") {
            total += 28
        }
        if (ice === "BarOne") {
            total += 23
        }
       
    }

    function Containing(con) {

        if (con === "Plain Cone") {
            total +=  7
        }
        if (con === "Sugar Cone") {
             total += 12
        }
        if (con === "Paper Cup") {
            total += 15
        }
    }

    function IceTopping(top) {
        if (top === "Crumbed Peanuts") {
            total += 3
        }
        if (top === "Caramel Dip") {
            total += 7 
        }

        if (top === "Chocolate Dip") {
            total+= 5
        }

        if (top === "Smarties") {
             total+= 6
        }

        if (top === "Oreos") {
            total+= 10
        }

        if (top === "Astros") {
            total+= 8 
        }

        if (top === "Jelly Babies") {
            total += 12 
        }

        if (top === "Rainbow Sprinkles") {
            total += 2 
        }
    }

    function totalIce() {
        return total;
    }




    return {
        flavour: Flavours,
        contains: Containing,
        topping: IceTopping,
        total: totalIce
    }

}