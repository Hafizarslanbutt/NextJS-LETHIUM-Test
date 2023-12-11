export const formatDateTime = (dateTimeString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString('en-US', options);
  };
  