use strict;
use warnings;
# use diagnostics; //couldn't find this module

use feature 'say';

use feature 'switch';

use v5.32;

print "Hello World\n";

my $name = 'Anton';

my ($age, $street) = (36, '123 1st Avenue SW');

my $my_info = "$name lives on \"$street\"\n";

$my_info = qq{$name lives on "$street"\n};

print $my_info;

my $bunch_of_info = <<"END";
This is a 
bunch of information 
on multiple lines
END

say $bunch_of_info;

my $big_int = 18446744073709551615;

# %c : Character
# %s : string
# %d : Decimal
# %u : Unsigned Integer
# %f : Floating Point (Decimal Notation)
# %e : Floaction Point (Scientific Notation)

printf("%u \n", $big_int + 1);

my $big_float = 0.1000000000000001;

printf("%.16f \n", $big_float + 1);

my $first = 1;
my $second = 2;

($first, $second) = ($second, $first);
say "$first $second";

say "5 + 4 = ", 5 + 4;
say "5 + 4 = ", 5 + 4;
say "5 ** 4 = ", 5 ** 4;

say "EXP 1 = ", exp 1;
say "HEX 10 = ", hex 10;
say "OCT 10 = ", oct 10;
say "INT 6.45 = ", int(6.45);
say "LOG 2 = ", log 2;
say "Random between 0 - 10 = ", int(rand 11);
say "SQRT 9 = ", sqrt 9;

my $rand_num = 5;
$rand_num += 1;
say "Number incremented ", $rand_num;

say "6++ = ", $rand_num++;
say "++6 = ", ++$rand_num;
say "6-- = ", $rand_num--;
say "--6 = ", --$rand_num;

say "3 + 2 * 5 = ", 3 + 2 * 5;
say "(3 + 2) * 5 = ", (3 + 2) * 5;

my $age = 80;
my $is_not_intoxicated = 1;
my $age_last_exam = 16;

if($age < 16) {
    say "You can't drive";
} elsif (!$is_not_intoxicated) {
    say "You can't drive";
} else {
    say "You can drive";
}

if (($age >=1) && ($age < 16)) {
    say "You can't drive";
} elsif (!$is_not_intoxicated) {
    say "You can't drive";
} elsif (($age >= 80) && (($age > 100) || ($age - $age_last_exam > 5 ))) {
    say "You can't drive"
} else {
    say "You can drive"
}

if ('a' eq 'b') {
    say "a equals be";
} else {
    say "a doesn't equal b";
}

unless(!$is_not_intoxicated) {
    say "Get Sober";
}

say (($age > 18) ? "Can Vote" : "Can't Vote");

for (my $i = 0; $i < 10; $i++) {
    say $i
}

my $i = 1;
while($i < 10) {
    if($i % 2 == 0) {
        $i++;
        next;
    }
    if($i == 7) {
        last;
    }
    say $i;
    $i++;
}

my $lucky_num = 7;

my $guess;

# do {
#  say "Guess a number between 1 and 10";
#  $guess = <STDIN>;

# } while $guess != $lucky_num;
# say "You Guessed 7";

my $age_old = 18;

given ($age_old) {
    when ($_ > 16) {
        say "Drive";
        continue;
    }
    when ($_ > 17) {
        say "Go Vote";
    }
    default {
        say "Nothing Special";
    }
}

my $long_string = "Random Long String";

say "Length of String ", length $long_string;

printf("Long is at %d \n", index $long_string, "Long");
printf("Last g is at %d \n", rindex $long_string, "g");

$long_string = $long_string . ' isn\'n that long';
say "New long string = ", $long_string;
say "Index 7 through 10 ", substr $long_string, 7, 4;

my $animal = "animals";

printf("Last character is %s\n", chop $animal);
say "New animal is = ", $animal;

my $no_newline  = "No Newline\n";
say "New line is = ", $no_newline;
chomp $no_newline;
say "New line is = ", $no_newline;

printf("Uppercase : %s \n", uc $long_string);
say "New Uppercase string is : ", $long_string;
printf("Lowercase : %s \n", lc $long_string);
printf("1st Uppercase : %s \n", ucfirst $long_string);

$long_string =~ s/ /, /g;
say $long_string;

my $two_times = "What I said is " x 2;
say $two_times;

my @abcs = ('a' .. 'z');
say "ABCS = ", @abcs;

print join(", ", @abcs), "\n";

my $letter = 'c';
say "Next Letter ", ++$letter;

my @primes = (2, 3, 5, 7, 11, 13, 17);

my @my_info = ("Anton", "Smirnov", "1st Avenue SW", 40, 6.25);

$my_info[5] = "Calgary"; 

for my $info (@my_info) {
    say $info;
}

foreach my $num (@primes) {
    say $num;
}

for (@my_info) {
    say $_;
}

my @my_name = @my_info[0, 1];
say @my_name;

my $items = scalar @my_info;
say $items;

my ($f_name, $l_name, $address, $how_old, $height, $city) = @my_info;
say "$f_name $l_name";

say "Popped Value ", pop @my_info;
say "Pushed Value ", push @primes, 17;
say "First Item ", shift @primes;
say 'Unshifted Item ', unshift @primes, 2;

print join(", ", @primes), "\n";

say "Remove Index 0 - 2", splice @primes, 0, 3;
print join (", ", @primes), "\n";

print join " ", ('list', 'of', 'words', "\n");

my $customers = "Anton Oksana Kirill Boris";
say $customers;
my @cust_array = split(' ', $customers);
say @cust_array;
print join (", ", @cust_array), "\n";
@cust_array = reverse @cust_array;
say "Reversed array ", @cust_array;

@cust_array = reverse sort @cust_array;
say @cust_array;

my @number_array = (1, 2, 3, 4, 5, 6, 7, 8);
my @odds_array = grep {$_ % 2} @number_array;
print join (", ", @odds_array), "\n";

my @dbl_array = map {$_ * 2} @number_array;
print join (", ", @dbl_array), "\n";