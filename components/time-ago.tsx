import {formatDistanceToNowStrict} from "date-fns";

export const TimeAgo = ({ date }: { date: string | number | Date }) => {
    return <span>{formatDistanceToNowStrict(new Date(date))} ago</span>;
};