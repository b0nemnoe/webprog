var humanYearsCatYearsDogYears = function(humanYears) {
    let dogyears = 0;
    let catyears = 0;
    if (humanYears >= 1) {
        for (let i = 1; i < humanYears+1; i++) {
            if (i == 1) {
                dogyears += 15;
                catyears += 15;
            }
            else if (i == 2)
            {
                dogyears += 9;
                catyears += 9;
            }
            else 
            {
                dogyears += 5;
                catyears += 4;
            }
        }
    }
    return [humanYears, catyears, dogyears];
  }
  