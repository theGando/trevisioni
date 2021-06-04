using System;
using System.Collections.Generic;

#nullable disable

namespace Trevisioni.Model
{
    public partial class StaticArt
    {
        public string Id { get; set; }
        public string ArtistId { get; set; }
        public int Position { get; set; }

        public virtual Artist Artist { get; set; }
    }
}
