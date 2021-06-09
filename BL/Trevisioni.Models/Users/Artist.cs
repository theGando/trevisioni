using System;
using System.Collections.Generic;

#nullable disable

namespace Trevisioni.Model
{
    public partial class Artist
    {
        public Artist()
        {
            Events = new HashSet<Event>();
            StaticArts = new HashSet<StaticArt>();
        }

        public string Id { get; set; }
        public string UserId { get; set; }
        public int Genre { get; set; }
        public string Subgenre { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string Bio { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Event> Events { get; set; }
        public virtual ICollection<StaticArt> StaticArts { get; set; }
    }
}
