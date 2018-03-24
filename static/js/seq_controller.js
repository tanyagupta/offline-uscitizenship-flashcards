//Sequence controller


let SequenceController = function (sequence) {

  outside = {}
  let current =0;

  function get_next () {
    current ++;
    if (current > (sequence.length -1))
      current = sequence.length
    return sequence[current]

  }
  function get_previous () {
    current --;
    if (current <0)
      current =0; // no more prevs
    return sequence[current]

  }
  function get_current () {

    return sequence[current]

  }


  outside['next'] = get_next;
  outside['prev'] = get_previous;
  outside['current'] = get_current;



  return outside


}

let seq = SequenceController (["Who is a booe?","Who are you?","We are dufus"])



console.log (seq.current())
console.log (seq.current())
console.log (seq.next())
console.log (seq.prev())
console.log (seq.current())
console.log (seq.prev())
console.log (seq.next())
console.log (seq.next())
