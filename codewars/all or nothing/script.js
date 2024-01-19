function possiblyPerfect(key,answers) {
    let eredmeny = null;
    for (let i = 0; i < key.length; i++) {
        if (key[i] !== '_') 
        {
            const egyezes = key[i] == answers[i];
            
            if (eredmeny === null) 
            {
                eredmeny = egyezes;
            }
            if (eredmeny !== egyezes) 
            {
            return false
            } 
        }
        
    }
    return true;
  }

