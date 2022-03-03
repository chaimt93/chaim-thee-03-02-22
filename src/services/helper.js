import {Notify} from "quasar";

export function notify_success(message) {
  Notify.create({type: "positive", message, color: 'green'});
}

export function notify_error(message) {
  Notify.create({type: "negative", message, color: 'red'});
}

export function notify_warning(message) {
  Notify.create({type: "warning", message, color: 'red'});
}

export function handleError(err) {
  console.error(err)
  notify_error("something went wrong")
}


