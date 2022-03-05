import {Notify} from "quasar";

export function notify_success(message) {
  Notify.create({type: "positive", message, color: 'primary',timeout:1500});
}


export function handleError(err) {
  console.error(err)
  Notify.create({type: "negative", message:'something went wrong...', color: 'red'});
}


