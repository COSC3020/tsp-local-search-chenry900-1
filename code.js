function tsp_ls(distance_matrix) {
    var length = distance_matrix.length;
    var tour = [...Array(length).keys()];


    return search(distance_matrix, tour);
}
function search(distance_matrix, tour) {
    var improved;
    var answer = distance(distance_matrix, tour);
    var length = tour.length;

    do {
        improved = false;
        for (var o = 1; o < length - 1; o++) {
            for (var i = o + 1; i < length; i++) {
                var newTour = twoOpt(tour, o, i);
                var newDistance = distance(distance_matrix, newTour);
                if (answer > newDistance) {
                    tour = newTour;
                    answer = newDistance;
                    improved = true;
                }
            }
        }
    } while (improved = true);

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
    return tour.slice(0, i).concat(tour.slice(i,k +1).reverse()).concat(tour.slice(k+1));
}
