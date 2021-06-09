using System;
using System.Collections.Generic;

#nullable disable

namespace Trevisioni.Model
{
    public partial class Event
    {
        public string Id { get; set; }
        public string ArtistId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string ActivityName { get; set; }

        public virtual Artist Artist { get; set; }
    }
}
