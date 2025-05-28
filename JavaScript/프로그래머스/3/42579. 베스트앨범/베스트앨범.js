function solution(genres, plays) {
    //장르별 점수 순서대로
    //장르별로 정렬하는데 점수별로 정렬한 키 값 2개를 배열에 순서대로추가.
    //객체에서 값을 기준으로 정렬하는건 의미 X     
    //해당순서대로 있는 장르별로 앞에 노래 2개 추가.
    let genresObj ={};
    let totalPlays ={};
    genres.forEach((v,i)=>{
        if(!genresObj[v]) genresObj[v]=[];
        genresObj[v].push({i, play: plays[i]});
        totalPlays[v] = (totalPlays[v] || 0) + plays[i];
    })
    
    let sortedGenres = Object.keys(totalPlays).sort((a,b) => totalPlays[b] - totalPlays[a]);
    
    let result=[];
    sortedGenres.forEach((g) =>{
        let songs = genresObj[g]
        .sort((a,b) =>b.play - a.play || a.i-b.i)
        .slice(0,2);
        
     songs.forEach(song => result.push(song.i));
    });

    return result;
}