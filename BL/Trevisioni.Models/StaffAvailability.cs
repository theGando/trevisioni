using System;
using System.Collections.Generic;

#nullable disable

namespace Trevisioni.Model
{
    public partial class StaffAvailability
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public virtual User User { get; set; }
    }
}
