struct Coordinates {
   int x;
   int y;
};
Coordinates gs;               // global struct
void tests(Coordinates *ps)
{
   Coordinates ls;            // local struct
   int li = 5;                // local int
   ls.y = 4;
   ps -> y = li;
}
int main()
{
   tests(&gs);
   gs.y = 3;
}
