// const {
//   fromEventPattern, timer,
//   interval, fromEvent, merge,
//   animationFrameScheduler, race
// } = rxjs;
// const {
//   bufferToggle, mergeAll,
//   mapTo, takeUntil, map, scan, mergeScan,
//   debounce, debounceTime, sample,
//   throttle, throttleTime, auditTime,
//   observeOn, bufferCount, first, filter,
//   repeat,buffer,
// } = rxjs.operators;
// // How fast does the user has to click
// // so that it counts as double click
// const doubleClickDuration = 250;

// // Create a stream out of the mouse click event.
// const leftClick$ = fromEvent(window, 'click')
//   // We are only interested in left clicks, so we filter the result down
//   .pipe(filter((event) => event.button === 0));

// // We have two things to consider in order to detect single or
// // or double clicks.

// // 1. We debounce the event. The event will only be forwared
// // once enough time has passed to be sure we only have a single click
// const debounce$ = leftClick$
//   .pipe(debounceTime(doubleClickDuration));

// // 2. We also want to abort once two clicks have come in.
// const clickLimit$ = leftClick$
//   .pipe(
//     bufferCount(2),
//   );

// // Now we combine those two. The gate will emit once we have
// // either waited enough to be sure its a single click or
// // two clicks have passed throug
// const bufferGate$ = race(debounce$, clickLimit$)
//   .pipe(
//     // We are only interested in the first event. After that
//     // we want to restart.
//     first(),
//     repeat(),
//   );

// // Now we can buffer the original click stream until our
// // buffer gate triggers.
// leftClick$
//   .pipe(
//     buffer(bufferGate$),
//     // Here we map the buffered events into the length of the buffer
//     // If the user clicked once, the buffer is 1. If he clicked twice it is 2
//     map(clicks => clicks.length),
//   ).subscribe(clicks => console.log('CLicks', clicks));
