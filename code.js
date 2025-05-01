function tsp_ls(distance_matrix) {
    var length = distance_matrix.length;
    var tour = [];
    var loader = [];

    for (i = 0; i < length; i++) {
        loader[i] = i;
    }

    for (i = 0; i < length; i++) {
        var num = Math.floor(Math.random() * loader.length);//copilot
        tour[i] = loader[num];
        loader.splice(num, 1);
    }


    return search(distance_matrix, tour);
}
function search(distance_matrix, tour) {
    var improved = 0;
    var answer = distance(distance_matrix, tour);
    var length = tour.length;
    var numIter = 199;
    var noImprovment = 0;
    var maxNoImprovement = 25;

    do {
        var i = Math.floor(Math.random() * (length - 2)) + 1;//copilot
        var k = Math.floor(Math.random() * (length - 1 - 1)) + i + 1;//copilot
        var newTour = twoOpt(tour, i, k);
        var newDistance = distance(distance_matrix, newTour);
        if (answer > newDistance) {
            tour = newTour;
            answer = newDistance;
            improved += 1;
            noImprovment = 0;
        }
        else {
            noImprovment += 1;
        }
    } while (improved < numIter && noImprovement < maxNoImprovement);

    return answer;
}

function distance(distance_matrix, tour) {
    var total = 0;
    for (var i = 0; i < tour.length -1; i++) {
        total += distance_matrix[tour[i]][tour[i+1]];
    }
    return total;
}

function twoOpt(tour, o, i) {
    return tour.slice(0, o).concat(tour.slice(o, i + 1).reverse()).concat(tour.slice(i+1));//copilot
}
