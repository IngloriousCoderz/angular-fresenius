$.ajax(
  url1,
  function (response1) {
    $.ajax(
      url2,
      function (response2) {
        $.ajax(
          url3,
          function (response3) {},
          function (error3) {}
        );
      },
      function (error2) {}
    );
  },
  function (error1) {}
);

$.ajax(url1, handleResponse1, handleError1);

function handleResponse1(response1) {
  $.ajax(url2, handleResponse2, handleError2);
}

function handleError1(error1) {}

function handleResponse2(response2) {
  $.ajax(url3, handleResponse3, handleError3);
}
function handleError2(error2) {}

function handleResponse3(response3) {}
function handleError3(error3) {}

const responses = [null, null];

$.ajax(url1, function (response1) {
  responses[0] = response1;
});
$.ajax(url2, function (response2) {
  responses[1] = response2;
});

console.log(responses);

$.ajax(url1)
  .then((response1) => $.ajax(url2))
  .then((response2) => $.ajax(url3))
  .then((response3) => console.log(response3))
  .catch((error) => console.error(error))
  .finally(() => {});

Promise.all([$.ajax(url1), $.ajax(url2)]).then(([response1, response2]) => {});

async function fetchData() {
  try {
    const response1 = await $.ajax(url1);
    const response2 = await $.ajax(url2);
    const response3 = await $.ajax(url3);
    console.log(response3);
  } catch (error) {
    console.error(error);
  } finally {
  }
}
