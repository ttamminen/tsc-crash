import FullCalendar from "@fullcalendar/react";
import { EventInput } from "@fullcalendar/core";

interface Props {}

function Index({}: Props) {
  const x: EventInput = {};

  return (
    <div>
      <FullCalendar></FullCalendar>
    </div>
  );
}

export default Index;
