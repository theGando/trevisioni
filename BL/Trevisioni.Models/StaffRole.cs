using System;
using System.Collections.Generic;

#nullable disable

namespace Trevisioni.Model
{
    public partial class StaffRole
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public int Role { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public virtual User User { get; set; }
    }
}
